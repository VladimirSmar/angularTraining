import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { UsersService } from 'src/app/modules/users/services/users.service';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss'],
})
export class AddUserShellComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {}

  userGroup: FormGroup = new FormGroup({});
  isFormInvalid: boolean = false;
  nameChange$: Observable<any>;

  ngOnInit(): void {}

  onUserFormInit(userForm: any): void {
    this.userGroup.addControl('user', userForm);
  }

  onAddressesFormsArrayInit(addressesForm: any) : void {
    this.userGroup.addControl('addresses', addressesForm);
  }

  addNewUser(): void {
    this.userGroup.markAllAsTouched();
    if (this.userGroup.valid) {
      this.usersService.addNewUser(this.userGroup.value.user, this.userGroup.value.addresses);
      this.router.navigateByUrl('/users');
    } else {
      this.isFormInvalid = true;
    }
  }
}
