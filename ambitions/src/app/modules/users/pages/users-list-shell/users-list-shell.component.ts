import { Component, OnInit, ViewChild } from '@angular/core';

import { IUser } from 'src/app/modules/users/interfaces/user';

import { UsersService } from '../../services/users.service';

import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { Favorite } from 'src/app/modules/shared/interfaces/favorite';
import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.scss'],
})
export class UsersListShellComponent implements OnInit {
  users: IUser[] = [];
  favorites!: Array<Favorite>;
  favoriteType: FAVORITE = FAVORITE.User;

  constructor(
    private usersService: UsersService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsersData();
    this.favorites = this.favoritesService.getFavoritesData();
  }
}
