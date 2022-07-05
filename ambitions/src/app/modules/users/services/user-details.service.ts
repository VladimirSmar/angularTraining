import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  user: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);

  constructor() {}
}
