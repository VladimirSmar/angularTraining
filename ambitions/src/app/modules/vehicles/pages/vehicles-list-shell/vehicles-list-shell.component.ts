import { Component, OnInit } from '@angular/core';

import { IVehicle } from 'src/app/modules/vehicles/interfaces/vehicle';

import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';

import { VehiclesService } from '../../services/vehicles.service';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';

@Component({
  selector: 'app-vehicles-list-shell',
  templateUrl: './vehicles-list-shell.component.html',
  styleUrls: ['./vehicles-list-shell.component.scss'],
})
export class VehiclesListShellComponent implements OnInit {
  vehicles!: IVehicle[];

  constructor(
    private vehiclesService: VehiclesService,
    private favoritesService: FavoritesService
  ) {}

  get favorites(): Array<number> {
    return this.favoritesService.getFavoritesData(FAVORITE.Vehicle);
  }

  ngOnInit(): void {
    this.vehicles = this.vehiclesService.getVehiclesData();
  }

  toggleIsFavorite(vehicle: IVehicle): void {
    this.favoritesService.toggleIsFavorite(vehicle.id, FAVORITE.Vehicle);
  }
}
