import { Component, OnInit, ViewChild } from '@angular/core';

import { IUser } from 'src/app/interfaces/user';

import { UsersService } from './services/users.service.service';

import { UserComponent } from 'src/app/shared-modules/user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  @ViewChild(UserComponent)
  userComponent: UserComponent = new UserComponent();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsersData();
  }

  deactivateUsers(users: IUser[]): void {
    users.forEach((user, index) => {
      users[index] = this.userComponent.deactivateUser(user);
    });
  }

  logChildOutputEvent(userName: string) {
    alert(userName);
  }
}
