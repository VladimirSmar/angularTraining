import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  user: ReplaySubject<IUser> = new ReplaySubject<IUser>();

  constructor() { }
}
