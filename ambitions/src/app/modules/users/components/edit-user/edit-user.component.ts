import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  user$: Observable<IUser>;
  userId: number;
  user: IUser;
  userGroup: FormGroup = new FormGroup({});
  isFormInvalid: boolean = false;
  _subscriptions: Subscription[] = [];

  @Output() emitHasUnsavedChangesEvent: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._subscriptions.push(
      this.route.paramMap.subscribe((params) => {
        this.userId = +params.get('id')!;
      })
    );
    this.user$ = this.usersService.getUserById(this.userId);
  }

  ngOnInit(): void {
    this._subscriptions.push(
      this.user$.subscribe((user) => {
        this.user = user;
        if (this.user) {
          this.userGroup.patchValue({ user: this.user });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onUserFormInit(userForm: any): void {
    this.userGroup.addControl('user', userForm);
    this.userGroup.get('user.email')!.clearAsyncValidators();
    this.userGroup.get('user.email')!.updateValueAndValidity();

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
    if (this.user) {
      this.userGroup.patchValue({ addresses: this.user.addresses });
    }
  }

  submitChanges(): void {
    this.userGroup.markAllAsTouched();
    if (this.userGroup.valid) {
      this.emitHasUnsavedChangesEvent.emit(false);
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
