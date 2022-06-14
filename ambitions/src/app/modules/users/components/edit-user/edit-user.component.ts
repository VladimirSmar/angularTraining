import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  submitChanges(): void {
    this.userGroup.markAllAsTouched();
    if (this.userGroup.valid) {
      this.usersService.editUser(
        this.userGroup.value.user,
        this.userGroup.getRawValue().addresses
      );
      this.router.navigateByUrl('/users');
    } else {
      this.isFormInvalid = true;
    }
  }
}
