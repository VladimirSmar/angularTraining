import { Injectable } from '@angular/core';
import { IUser } from 'src/app/modules/users/interfaces/user';
import { IAddress } from '../interfaces/address';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: IUser[] = [
    {
      id: 1,
      firstName: 'Michael',
      lastName: 'Reeves',
      email: 'Test@gmail.com',
      age: 23,
      gender: `male`,
      department: 'software',
      company: `Kukaracha`,
      imageUrl: `/assets/images/firstuser.jpg`,
      address: [],
    },
    {
      id: 2,
      firstName: 'Pikachu',
      lastName: 'Chu',
      email: 'Test1@gmail.com',
      age: 5,
      gender: `female`,
      department: 'monsters',
      company: `Pokemon`,
      imageUrl: `/assets/images/seconduser.jpg`,
      address: [],
    },
    {
      id: 3,
      firstName: 'Agent 007',
      lastName: 'Actually 008',
      email: 'Test3@gmail.com',
      age: 43,
      gender: `male`,
      department: 'assassins',
      company: `Undifined`,
      imageUrl: `/assets/images/thirduser.jpg`,
      address: [],
    },
  ];

  constructor() {}

  getUsers(): IUser[] {
    return this.users;
  }

  addNewUser(user: IUser, addresses: Array<IAddress>): void {
    let newUser: IUser = {
      id: this.users.length + 1,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      gender: user.gender,
      department: user.department,
      company: user.company,
      imageUrl: `/assets/images/defaultProfile.jpg`,
      address: addresses
    };
    this.users.push(newUser);
  }
}
