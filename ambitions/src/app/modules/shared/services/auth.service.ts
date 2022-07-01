import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, delay, ReplaySubject } from 'rxjs';
import { IAuthUser } from '../../auth/interfaces/authUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: IAuthUser | undefined;
  userSubj: ReplaySubject<IAuthUser | undefined> = new ReplaySubject<
    IAuthUser | undefined
  >();
  users: IAuthUser[] = [
    {
      login: 'test',
      password: 'test',
    },
  ];

  constructor(private router: Router) {}

  verifyUser(userData: IAuthUser): Observable<IAuthUser | undefined> {
    let user = this.users.find(
      (user: IAuthUser) =>
        user.login === userData.login && user.password === userData.password
    );
    return of(user).pipe(delay(1000));
  }

  loginUser(user: IAuthUser): void {
    this.currentUser = user;
    this.userSubj.next(this.currentUser);
  }

  logOutUser(): void {
    this.currentUser = undefined;
    this.userSubj.next(this.currentUser);
    this.router.navigate(['login']);
  }

  checkIfUserLoggedIn(): IAuthUser | undefined {
    return this.currentUser;
  }

  getCurrentUser(): Observable<IAuthUser | undefined> {
    return this.userSubj.asObservable();
  }

  signupUser(
    newUser: IAuthUser
  ): Observable<{ status: boolean; message: string }> {
    let message: string = '';
    let status: boolean = true;
    if (this.users.find((user: IAuthUser) => user.login == newUser.login)) {
      message = 'This user already exist';
      status = false;
    } else {
      this.users.push(newUser);
      message =
        'You have registered a new user with the name: ' + newUser.login;
    }
    return of({ message: message, status: status }).pipe(delay(1000));
  }
}
