import { Component, OnInit } from '@angular/core';
import { IVehicle } from 'src/app/interfaces/vehicle';
import { VehiclesService } from './services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  vehicles: IVehicle[] = [];

  constructor(private vehiclesService: VehiclesService) {}

  ngOnInit(): void {
    this.vehicles = this.vehiclesService.getVehiclesData();
  }
}
