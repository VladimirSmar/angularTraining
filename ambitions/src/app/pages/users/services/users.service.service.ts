import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: IUser[] = [
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
      age: 31,
      activated: true,
    },
    {
      name: 'Vegetable',
      age: 19,
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

  getUsersData(): IUser[] {
    return this.users;
  }
}
