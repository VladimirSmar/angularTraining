import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/modules/users/interfaces/user';
import { IVehicle } from 'src/app/modules/vehicles/interfaces/vehicle';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  entity!: IUser | IVehicle;
  @Output() addToFavoriteEvent: EventEmitter<IUser | IVehicle> =
    new EventEmitter<IUser | IVehicle>();
  isFavored: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  addToFavorite(): void {
    this.addToFavoriteEvent.emit(this.entity);
    this.isFavored = !this.isFavored;
  }
}
