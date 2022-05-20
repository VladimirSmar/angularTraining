import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  isDeactivatedUsersShown: boolean = true;
  isDeactivatedUsersHidden: boolean = true;
  users: IUser[] = [
    {
      name: 'Michael',
      age: 23,
      activated: true,
    },
    {
      name: 'Dzmitry',
      age: 11,
      activated: true,
    },
    {
      name: 'Pikachu',
      age: 5,
      activated: true,
    },
    {
      name: 'Vegetable',
      age: 1,
      activated: true,
    },
    {
      name: 'Name',
      age: 100,
      activated: false,
    },
    {
      name: 'Satan',
      age: 666,
      activated: false,
    },
    {
      name: 'Vacabulary',
      age: 13,
      activated: true,
    },
    {
      name: 'Anthony',
      age: 62,
      activated: true,
    },
    {
      name: 'George',
      age: 31,
      activated: true,
    },
    {
      name: 'Pavel',
      age: 45,
      activated: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public deactivateUser(user: IUser): void {
    user.activated = false;
  }

  public toggleDeactivatedUsersVisibility(): void {
    this.isDeactivatedUsersShown = !this.isDeactivatedUsersShown;
  }

  public toggleDeactivatedUsersHidden(): void {
    this.isDeactivatedUsersHidden = !this.isDeactivatedUsersHidden;
  }
}
