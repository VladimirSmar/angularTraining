import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { UsersService } from 'src/app/modules/users/services/users.service';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss'],
})
export class AddUserShellComponent implements OnInit, OnDestroy {
  userGroup: FormGroup = new FormGroup({});
  isFormInvalid: boolean = false;
  nameChange$: Observable<any>;
  _subscriptions: Subscription[] = [];

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onUserFormInit(userForm: any): void {
    this.userGroup.addControl('user', userForm);
    this._subscriptions.push(
      combineLatest(
        this.userGroup.get('user.firstName')!.valueChanges,
        this.userGroup.get('user.lastName')!.valueChanges
      ).subscribe(([firstName, lastName]) => {
        this.createEmailValue(firstName, lastName);
      })
    );
  }

  createEmailValue(firstName: string, lastName: string): void {
    this.userGroup
      .get('user')!
      .patchValue({ ['email']: firstName + lastName + '@gmail.com' });
  }

  onAddressesFormsArrayInit(addressesForm: any): void {
    this.userGroup.addControl('addresses', addressesForm);
  }

  addNewUser(): void {
    this.userGroup.markAllAsTouched();
    if (this.userGroup.valid) {
      this.usersService.addNewUser(
        this.userGroup.value.user,
        this.userGroup.value.addresses
      );
      this.router.navigateByUrl('/users');
    } else {
      this.isFormInvalid = true;
    }
  }
}
