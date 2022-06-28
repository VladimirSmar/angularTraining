import { Injectable } from '@angular/core';
import { Observable, map, of, delay } from 'rxjs';
import { IUser } from 'src/app/modules/users/interfaces/user';
import { IAddress } from '../interfaces/address';
import { IUserApi } from '../interfaces/userApi';
import { ApiUsersService } from './api-users.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: IUser[] = [];

  constructor(private apiUsersService: ApiUsersService) {}

  getUsers(
    pageIndex: number,
    pageSize: number,
    filter: string = ''
  ): Observable<IUser[]> {
    const path = `?page=${pageIndex}&results=${pageSize}&seed=ambicions`;
    return this.apiUsersService.getUsers(path).pipe(
      map((users: IUserApi[]) => {
        return this.filterUsers(this.mapUsersDTOtoUsers(users), filter);
      })
    );
  }

  getUserById(pageIndex: string, id: string): Observable<IUser> {
    const path = `?page=${pageIndex}&results=6&seed=ambicions`;
    return this.apiUsersService.getUserById(path).pipe(
      map((users: IUserApi[]) => {
        return this.filterUsersById(this.mapUsersDTOtoUsers(users), id);
      })
    );
  }

  mapUsersDTOtoUsers(usersDTO: IUserApi[]): IUser[] {
    return usersDTO.map((userDTO: IUserApi) => {
      return {
        id: userDTO.login.uuid,
        firstName: userDTO.name.first,
        lastName: userDTO.name.last,
        age: userDTO.dob.age,
        gender: userDTO.gender,
        nationality: userDTO.nat,
        phone: userDTO.phone,
        email: userDTO.email,
        imageUrl: userDTO.picture.large,
        addresses: [
          {
            addressLine: userDTO.location.country,
            city: userDTO.location.city,
            zip: userDTO.location.postcode,
          },
        ],
      };
    });
  }

  filterUsers(users: IUser[], filter: string) {
    return users.filter((user: any) => {
      return `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(filter);
    });
  }

  filterUsersById(users: IUser[], id: string) {
    return users.filter((user: IUser) => {
      return user.id == id;
    })[0];
  }

  createDelay(): number {
    const min = 1000;
    const max = 3000;
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  exportUserToExcel(user: string): Observable<string> {
    console.log('Loading - ' + user);
    return of(user)
      .pipe(
        delay(this.createDelay()));
  }

  saveUser(user: string): Observable<string> {
    console.log('Loading - ' + user);
    return of(user)
      .pipe(
        delay(this.createDelay()));
  }

  addNewUser(user: IUserApi, addresses: Array<IAddress>): void {}

  editUser(id: string, user: IUserApi, addresses: Array<IAddress>): void {}
}
