import { Injectable } from '@angular/core';
import { IUser } from 'src/app/modules/users/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: IUser[] = [
    {
      id: 1,
      name: 'Michael',
      age: 23,
      gender: `male`,
      department: 'software',
      company: `Kukaracha`,
      imageUrl: `/assets/images/firstuser.jpg`,

    },
    {
      id: 2,
      name: 'Pikachu',
      age: 5,
      gender: `female`,
      department: 'monsters',
      company: `Pokemon`,
      imageUrl: `/assets/images/seconduser.jpg`,
    },
    {
      id: 3,
      name: 'Agent 007',
      age: 43,
      gender: `male`,
      department: 'assassins',
      company: `Undifined`,
      imageUrl: `/assets/images/thirduser.jpg`,
    },
  ];

  constructor() {}

  getUsersData(): IUser[] {
    return this.users;
  }
}
