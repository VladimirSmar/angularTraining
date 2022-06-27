import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { IVehicle } from '../../interfaces/vehicle';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
})
export class VehiclesListComponent implements OnInit {
  @Input() vehicles: IVehicle[];

  @Output() toggleIsFavoriteEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {}

  toggleIsFavorite(vehicle: IVehicle): void {
    this.toggleIsFavoriteEvent.emit(vehicle);
  }

  checkIfFavored(vehicleId: string): boolean {
    return this.favoritesService.checkIfFavored(vehicleId, FAVORITE.Vehicle);
  }
}
