import { Component, Input, OnInit } from '@angular/core';
import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';
import { Favorite } from '../../interfaces/favorite';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  @Input() favorites!: Array<Favorite>;
  @Input() favoriteType!: FAVORITE;

  constructor() {}

  ngOnInit(): void {}
}
