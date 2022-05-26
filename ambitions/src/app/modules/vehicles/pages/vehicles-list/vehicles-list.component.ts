import { Component, Input, OnInit } from '@angular/core';
import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { IUser } from 'src/app/modules/users/interfaces/user';
import { IVehicle } from '../../interfaces/vehicle';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  @Input() vehicles!: IVehicle[];

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }

  addToFavorite(card: IUser | IVehicle): void {
    this.favoritesService.addToFavorite(card.id, FAVORITE.User, card.name);
  }

  deleteFromFavorite(card: IUser | IVehicle): void {
    this.favoritesService.deleteFromFavorite(card.id);
  }

}
