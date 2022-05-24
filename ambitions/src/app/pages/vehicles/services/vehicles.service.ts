import { Injectable } from '@angular/core';
import { IVehicle } from 'src/app/interfaces/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  private vehicles: IVehicle[] = [
    {
      model: 'Yamaha',
      productionYear: 1985,
      price: 2000,
    },
    {
      model: 'Yoyota',
      productionYear: 2003,
      price: 20200,
    },
    {
      model: 'Korolla',
      productionYear: 2009,
      price: 50000,
    },
  ];

  constructor() {}

  getVehiclesData(): IVehicle[] {
    return this.vehicles;
  }
}
