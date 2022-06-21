import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/modules/users/interfaces/user';

import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';

import { UsersService } from '../../services/users.service';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss'],
})
export class UsersListShellComponent implements OnInit {
  users: IUser[] = [];
  favoritesIds: number[];
  searchControl = new FormControl();

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
    this.usersService.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
    });
    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.usersService
          .getUsers(value.toLowerCase())
          .subscribe((users: IUser[]) => {
            this.users = users;
          });
      });
  }

  searchForUsers() {
    this.searchControl.value;
  }

  toggleIsFavorite(user: IUser): void {
    this.favoritesService.toggleIsFavorite(user.id, FAVORITE.User);
  }
}
