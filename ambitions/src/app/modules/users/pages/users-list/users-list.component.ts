import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';
import { IUser } from '../../interfaces/user';
import { IVehicle } from 'src/app/modules/vehicles/interfaces/vehicle';
import { Favorite } from 'src/app/modules/shared/interfaces/favorite';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() users!: IUser[];
  @Input() favorites!: Favorite[];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {}

  addToFavorite(user: IUser | IVehicle): void {
    this.favoritesService.addToFavorite(user.id, FAVORITE.User, user.name);
  }

  removeFromFavorite(user: IUser | IVehicle): void {
    this.favoritesService.removeFromFavorite(user.id, FAVORITE.User);
  }

  checkIfFavored(userId: number): boolean {
    return this.favoritesService.checkIfFavored(userId, FAVORITE.User);
  }
}
