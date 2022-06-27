import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../shared/services/http.service';
import { IUserApi } from '../interfaces/userApi';

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  constructor(private httpService: HttpService) {}

  getUsers(path: string, params?: object): Observable<IUserApi[]> {
    return this.httpService.get(path, params);
  }

  getUserById(path: string, params?: object): Observable<IUserApi[]> {
    return this.httpService.get(path, params);
  }
}
