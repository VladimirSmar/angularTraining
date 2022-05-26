import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';
import { IUser } from '../../interfaces/user';
import { IVehicle } from 'src/app/modules/vehicles/interfaces/vehicle';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() users!: IUser[];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {}

  addToFavorite(card: IUser | IVehicle): void {
    this.favoritesService.addToFavorite(card.id, FAVORITE.User, card.name);
  }

  deleteFromFavorite(card: IUser | IVehicle): void {
    this.favoritesService.deleteFromFavorite(card.id);
  }
}
