import { Component, OnDestroy, OnInit } from '@angular/core';

import { IUser } from 'src/app/modules/users/interfaces/user';

import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';

import { UsersService } from '../../services/users.service';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { Subscription } from 'rxjs';
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
  }

  toggleIsFavorite(user: IUser): void {
    this.favoritesService.toggleIsFavorite(user.id, FAVORITE.User);
  }
}
