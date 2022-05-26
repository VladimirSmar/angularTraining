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

  removeFromFavorite(entityId: number, entityType: FAVORITE): void {
    let favoriteId = this.favorites.findIndex((favorite) => {
      return favorite.id == entityId && favorite.type == entityType;
    });
    this.favorites.splice(favoriteId, 1);
  }

  checkIfFavored(entityId: number, entityType: FAVORITE): boolean {
    return this.favorites.find((favorite) => {
      return favorite.type == entityType && favorite.id == entityId;
    })
      ? true
      : false;
  }
}
