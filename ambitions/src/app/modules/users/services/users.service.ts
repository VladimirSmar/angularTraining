import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { IUser } from 'src/app/modules/users/interfaces/user';

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
    },
  ];

  constructor() {}

  getUsersData(): IUser[] {
    return this.users;
  }

  addNewUser({
    firstName = 'Default',
    lastName = 'Name',
    email = 'Preset@gmail.com',
    age = 20,
    gender = 'male',
    department = 'testing',
    company = 'Default Incorporated',
  }): void {
    let newUser: IUser = {
      id: this.users.length + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      gender: gender,
      department: department,
      company: company,
      imageUrl: `/assets/images/defaultProfile.jpg`,
    };
    this.users.push(newUser);
  }

  checkIfEmailExists(email: string): Observable<boolean> {
    return of(
      this.users.some((user) => {
        return user.email == email;
      })
    ).pipe(delay(1000));
  }

  emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfEmailExists(control.value).pipe(
        map((result: boolean) => {
          return result ? { emailExists: true } : null;
        })
      );
    };
  }
}
