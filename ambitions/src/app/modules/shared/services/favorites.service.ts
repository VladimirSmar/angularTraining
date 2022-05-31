import { Injectable } from '@angular/core';
import { FAVORITE } from '../enums/favoriteCards';

type FavoriteMap = {
  [key in FAVORITE]: number[];
};

const favoriteMap: FavoriteMap = {
  [FAVORITE.User]: [],
  [FAVORITE.Vehicle]: [],
};

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  constructor() {}

  getFavoritesData(type: FAVORITE): Array<number> {
    return favoriteMap[type];
  }

  toggleIsFavorite(id: number, type: FAVORITE): void {
    favoriteMap[type].includes(id)
      ? favoriteMap[type].splice(favoriteMap[type].indexOf(id), 1)
      : favoriteMap[type].push(id);
  }

  checkIfFavored(id: number, type: FAVORITE): boolean {
    return favoriteMap[type].find((favorite) => {
      return (favorite = id);
    })
      ? true
      : false;
  }
}
