import { Injectable } from '@angular/core';
import { Favorite } from '../interfaces/favorite';
import { FAVORITE } from '../enums/favoriteCards';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites: Array<Favorite> = [];

  constructor() {}

  getFavoritesData(): Array<Favorite> {
    return this.favorites;
  }

  addToFavorite(id: number, type: FAVORITE, name: string): void {
    this.favorites.push({
      id: id,
      type: type,
      name: name,
    });
  }

  deleteFromFavorite(id: number): void {
    let favoriteId = this.favorites.findIndex((favorite) => {
      favorite.id == id;
    });
    this.favorites.splice(favoriteId, 1);
  }
}
