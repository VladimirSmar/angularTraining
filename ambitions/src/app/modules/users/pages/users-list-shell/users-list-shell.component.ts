import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/modules/users/interfaces/user';

import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';

import { UsersService } from '../../services/users.service';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss'],
})
export class UsersListShellComponent implements OnInit {
  users: IUser[] = [];
  favoritesIds: number[];

  constructor(
    private usersService: UsersService,
    private favoritesService: FavoritesService
  ) {}

  get favorites(): Array<IUser> {
    this.favoritesService
      .getFavorites(FAVORITE.User)
      .subscribe((favoritesIds) => {
        this.favoritesIds = favoritesIds;
      });
    return this.users.filter((user: IUser) => {
      return this.favoritesIds.includes(user.id);
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(filter: string = ''): void {
    this.usersService
      .getUsers(filter.toLowerCase())
      .subscribe((users: IUser[]) => {
        this.users = users;
      });
  }

  toggleIsFavorite(user: IUser): void {
    this.favoritesService.toggleIsFavorite(user.id, FAVORITE.User);
  }
}
