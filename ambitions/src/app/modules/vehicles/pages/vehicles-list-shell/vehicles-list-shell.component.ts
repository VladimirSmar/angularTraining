import { Component, OnInit } from '@angular/core';
import { IVehicle } from 'src/app/modules/vehicles/interfaces/vehicle';
import { VehiclesService } from '../../services/vehicles.service';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { Favorite } from 'src/app/modules/shared/interfaces/favorite';
import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';

@Component({
  selector: 'app-vehicles-list-shell',
  templateUrl: './vehicles-list-shell.component.html',
  styleUrls: ['./vehicles-list-shell.component.scss'],
})
export class VehiclesListShellComponent implements OnInit {
  vehicles: IVehicle[] = [];
  favorites!: Array<Favorite>;
  favoriteType: FAVORITE = FAVORITE.Vehicle;

  constructor(
    private vehiclesService: VehiclesService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.vehicles = this.vehiclesService.getVehiclesData();
    this.favorites = this.favoritesService.getFavoritesData();
  }
}
