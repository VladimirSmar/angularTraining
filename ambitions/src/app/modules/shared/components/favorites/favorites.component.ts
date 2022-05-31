import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  @Input() favorites!: Array<number>;

  constructor() {}

  ngOnInit(): void {}
}
