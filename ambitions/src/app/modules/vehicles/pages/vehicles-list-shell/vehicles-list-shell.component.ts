import { Component, OnDestroy, OnInit } from '@angular/core';

import { IVehicle } from 'src/app/modules/vehicles/interfaces/vehicle';

import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';

import { VehiclesService } from '../../services/vehicles.service';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vehicles-list-shell',
  templateUrl: './vehicles-list-shell.component.html',
  styleUrls: ['./vehicles-list-shell.component.scss'],
})
export class VehiclesListShellComponent implements OnInit, OnDestroy {
  vehicles: IVehicle[];
  favoritesIds: number[];
  _subscriptions: Subscription[] = [];

  constructor(
    private vehiclesService: VehiclesService,
    private favoritesService: FavoritesService
  ) {}

  get favorites(): Array<IVehicle> {
    this._subscriptions.push(
      this.favoritesService
        .getFavorites(FAVORITE.Vehicle)
        .subscribe((favoritesId) => {
          this.favoritesIds = favoritesId;
        })
    );
    return this.vehicles?.filter((vehicle: IVehicle) => {
      return this.favoritesIds?.includes(vehicle.id);
    });
  }

  ngOnInit(): void {
    this._subscriptions.push(
      this.vehiclesService
        .getVehiclesData()
        .subscribe((vehicles: IVehicle[]) => {
          this.vehicles = vehicles;
        })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }

  toggleIsFavorite(vehicle: IVehicle): void {
    this.favoritesService.toggleIsFavorite(vehicle.id, FAVORITE.Vehicle);
  }
}
