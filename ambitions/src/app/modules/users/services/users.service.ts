import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
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
      addresses: [
        {
          addressLine: 'asdasdas',
          city: 'asgasg',
          zip: 123123,
        },
      ],
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
      addresses: [
        {
          addressLine: 'asdasdas',
          city: 'asgasg',
          zip: 123123,
        },
        {
          addressLine: 'asdas',
        },
      ],
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
      addresses: [
        {
          addressLine: 'asdasdas',
        },
      ],
    },
  ];

  constructor() {}

  getUsers(filter: string = ''): Observable<IUser[]> {
    return of(
      this.users.filter((user: IUser) => {
        return `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(filter);
      })
    ).pipe(delay(1000));
  }

  getUserById(id: number): Observable<IUser> {
    return of(
      this.users.find((user: IUser) => {
        return user.id == id;
      })!
    ).pipe(delay(1000));
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
      addresses: addresses,
    };
    this.users.push(newUser);
  }

  editUser(id: number, user: IUser, addresses: Array<IAddress>): void {
    let modifiedUser: IUser = {
      id: id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      age: user.age,
      gender: user.gender,
      department: user.department,
      company: user.company,
      imageUrl: this.users.find((user) => {
        return user.id == id;
      })!.imageUrl,
      addresses: addresses,
    };

    this.users = this.users.map((user) =>
      user.id == modifiedUser.id ? modifiedUser : user
    );
  }
}
