import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/modules/users/interfaces/user';
import { IVehicle } from 'src/app/modules/vehicles/interfaces/vehicle';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() entity!: IUser | IVehicle;
  @Input() isFavored!: boolean;

  @Output() addToFavoriteEvent: EventEmitter<IUser | IVehicle> =
    new EventEmitter<IUser | IVehicle>();
  @Output() removeFromFavoriteEvent: EventEmitter<IUser | IVehicle> =
    new EventEmitter<IUser | IVehicle>();

  constructor() {}

  ngOnInit(): void {}

  addToFavorite(): void {
    if (this.isFavored) {
      this.isFavored = !this.isFavored;
      this.removeFromFavoriteEvent.emit(this.entity);
    } else {
      this.isFavored = !this.isFavored;
      this.addToFavoriteEvent.emit(this.entity);
    }
  }
}
