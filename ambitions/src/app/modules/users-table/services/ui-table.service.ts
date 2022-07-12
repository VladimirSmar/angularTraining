import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../users/interfaces/user';

const DummyUsers: IUser[] = [
  {
    id: '123',
    firstName: 'Test',
    lastName: 'Test',
    email: 'Test@gmail.com',
    age: 1,
    gender: 'male',
    nationality: 'DE',
    phone: 1,
    imageUrl: '',
    addresses: [{ addressLine: 'test', city: 'test', zip: 123 }],
  },
];

@Injectable({
  providedIn: 'root',
})
export class UiTableService {
  users: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>(DummyUsers);

  constructor() {}
}
