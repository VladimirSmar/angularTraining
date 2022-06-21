import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IVehicle } from 'src/app/modules/vehicles/interfaces/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  private vehicles: IVehicle[] = [
    {
      id: 1,
      name: `Yamaga`,
      color: `red`,
      releaseYear: 1997,
      number: `0005 ba-1`,
      imageUrl: `/assets/images/firstcar.jpg`,
    },
    {
      id: 2,
      name: `Tayata`,
      color: `brown`,
      releaseYear: 2003,
      number: `0013 as-3`,
      imageUrl: `/assets/images/secondcar.jpg`,
    },
    {
      id: 3,
      name: `mosckvich`,
      color: `black`,
      releaseYear: 1107,
      number: `0020 m-7`,
      imageUrl: `/assets/images/thirdcar.jpg`,
    },
  ];

  constructor() {}

  getVehiclesData(): Observable<IVehicle[]> {
    return of(this.vehicles).pipe(delay(1000));
  }
}
