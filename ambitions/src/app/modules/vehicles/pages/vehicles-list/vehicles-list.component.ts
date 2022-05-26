import { Component, Input, OnInit } from '@angular/core';
import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';
import { Favorite } from 'src/app/modules/shared/interfaces/favorite';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { IUser } from 'src/app/modules/users/interfaces/user';
import { IVehicle } from '../../interfaces/vehicle';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
})
export class VehiclesListComponent implements OnInit {
  @Input() vehicles!: IVehicle[];
  @Input() favorites!: Favorite[];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {}

  addToFavorite(vehicle: IUser | IVehicle): void {
    this.favoritesService.addToFavorite(
      vehicle.id,
      FAVORITE.Vehicle,
      vehicle.name
    );
  }

  removeFromFavorite(vehicle: IUser | IVehicle): void {
    this.favoritesService.removeFromFavorite(vehicle.id, FAVORITE.Vehicle);
  }

  checkIfFavored(vehicleId: number): boolean {
    return this.favoritesService.checkIfFavored(vehicleId, FAVORITE.Vehicle);
  }
}
