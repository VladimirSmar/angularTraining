import { Component, OnInit } from '@angular/core';

import { IUser } from 'src/app/modules/users/interfaces/user';

import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';

import { UsersService } from '../../services/users.service';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss'],
})
export class UsersListShellComponent implements OnInit {
  users: IUser[] = [];

  constructor(
    private usersService: UsersService,
    private favoritesService: FavoritesService
  ) {}

  get favorites(): Array<number> {
    return this.favoritesService.getFavoritesData(FAVORITE.User);
  }

  ngOnInit(): void {
    this.users = this.usersService.getUsersData();
  }

  toggleIsFavorite(user: IUser): void {
    this.favoritesService.toggleIsFavorite(user.id, FAVORITE.User);
  }
}
