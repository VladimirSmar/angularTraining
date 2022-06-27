import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { IUser } from '../interfaces/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class UsersValidatorService {
  users: IUser[];

  constructor(private usersService: UsersService) {
    /* this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    }); */
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
