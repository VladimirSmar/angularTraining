import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  @Input() user: IUser;
  userGroup: FormGroup = new FormGroup({});
  isFormInvalid: boolean = false;
  @Output() emitHasUnsavedChangesEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  onUserFormInit(userForm: any): void {
    this.userGroup.addControl('user', userForm);
    this.userGroup.get('user.email')!.clearAsyncValidators();
    this.userGroup.get('user.email')!.updateValueAndValidity();
    this.userGroup.patchValue({ user: this.user });
    combineLatest(
      this.userGroup.get('user.firstName')!.valueChanges,
      this.userGroup.get('user.lastName')!.valueChanges
    ).subscribe(([firstName, lastName]) => {
      this.createEmailValue(firstName, lastName);
    });
  }

  createEmailValue(firstName: string, lastName: string): void {
    this.userGroup
      .get('user')!
      .patchValue({ ['email']: firstName + lastName + '@gmail.com' });
  }

  onAddressesFormsArrayInit(addressesForm: any): void {
    this.userGroup.addControl('addresses', addressesForm);
    this.userGroup.patchValue({ addresses: this.user.addresses });
  }

  submitChanges(): void {
    this.userGroup.markAllAsTouched();
    this.emitHasUnsavedChangesEvent.emit(false);
    if (this.userGroup.valid) {
      this.usersService.editUser(
        this.user.id,
        this.userGroup.value.user,
        this.userGroup.getRawValue().addresses
      );
      this.router.navigateByUrl('/users');
    } else {
      this.isFormInvalid = true;
    }
  }
}
