import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/modules/users/services/users.service';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss'],
})
export class AddUserShellComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {}

  addUserGroup: FormGroup = new FormGroup({});
  isFormInvalid: boolean = false;

  ngOnInit(): void {}

  addNewUser(): void {
    console.log(this.addUserGroup);
    this.addUserGroup.markAllAsTouched();
    if (this.addUserGroup.valid) {
      this.usersService.addNewUser(this.addUserGroup.value.user, this.addUserGroup.value.addresses);
      this.router.navigateByUrl('/users');
    } else {
      this.isFormInvalid = true;
    }
  }
}
