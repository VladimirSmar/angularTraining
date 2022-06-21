import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  getFavorites(type: FAVORITE): Observable<Array<number>> {
    return of(favoriteMap[type]);
  }

  toggleIsFavorite(id: number, type: FAVORITE): void {
    favoriteMap[type].includes(id)
      ? favoriteMap[type].splice(favoriteMap[type].indexOf(id), 1)
      : favoriteMap[type].push(id);
  }

  checkIfFavored(id: number, type: FAVORITE): boolean {
    return favoriteMap[type].includes(id)
      ? true
      : false;
  }
}
