import { Component, OnDestroy, OnInit } from '@angular/core';

import { IUser } from 'src/app/modules/users/interfaces/user';

import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';

import { UsersService } from '../../services/users.service';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import {
  concatMap,
  exhaustMap,
  mergeMap,
  Subject,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss'],
})
export class UsersListShellComponent implements OnInit, OnDestroy {
  users: IUser[] = [];
  favoritesIds: string[];
  _subscriptions: Subscription[] = [];

  length: number = 96;
  pageIndex: number = 0;
  pageSize: number = 6;
  pageSizeOptions: number[] = [6];

  refreshClickSubject = new Subject<void>();
  onlyFirstClickSubject = new Subject<void>();
  exportSubj = new Subject();
  saveSubj = new Subject();

  constructor(
    private usersService: UsersService,
    private favoritesService: FavoritesService
  ) {}

  get favorites(): Array<IUser> {
    this._subscriptions.push(
      this.favoritesService
        .getFavorites(FAVORITE.User)
        .subscribe((favoritesIds) => {
          this.favoritesIds = favoritesIds;
        })
    );
    return this.users?.filter((user: IUser) => {
      return this.favoritesIds?.includes(user.id);
    });
  }

  ngOnInit(): void {
    this.getUsers();
    this.refreshUsers();
    this.onlyFirstQueueLog();
    this.exportUserToExcelSubject();
    this.saveUserSubject();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }

  getUsers(filter: string = ''): void {
    this._subscriptions.push(
      this.usersService
        .getUsers(this.pageIndex, this.pageSize, filter.toLowerCase())
        .subscribe((users: IUser[]) => {
          this.users = users;
        })
    );
  }

  OnPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getUsers();
    window.scrollTo(0, 0);
  }

  toggleIsFavorite(user: IUser): void {
    this.favoritesService.toggleIsFavorite(user.id, FAVORITE.User);
  }

  refreshUsers(): void {
    this._subscriptions.push(
      this.refreshClickSubject
        .pipe(
          switchMap(() => {
            return this.usersService.getUsers(this.pageIndex, this.pageSize);
          })
        )
        .subscribe((users: IUser[]) => {
          this.users = users;
        })
    );
  }

  onlyFirstQueueLog(): void {
    this._subscriptions.push(
      this.onlyFirstClickSubject
        .pipe(
          exhaustMap(() => {
            return this.usersService.getUsers(this.pageIndex, this.pageSize);
          })
        )
        .subscribe((users: IUser[]) => {
          this.users = users;
        })
    );
  }

  exportUserToExcelSubject(): void {
    this._subscriptions.push(
      this.exportSubj
        .pipe(
          mergeMap((req: any) => {
            return this.usersService.exportUserToExcel(req);
          })
        )
        .subscribe((data) => {
          console.log(data);
        })
    );
  }

  exportUserToExcel(id: string): void {
    this.exportSubj.next(id);
  }

  saveUserSubject(): void {
    this._subscriptions.push(
      this.saveSubj
        .pipe(
          concatMap((req: any) => {
            return this.usersService.saveUser(req);
          })
        )
        .subscribe((data) => {
          console.log(data);
        })
    );
  }

  saveUser(id: string): void {
    this.saveSubj.next(id);
  }
}
