import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { FAVORITE } from '../enums/favoriteCards';

type FavoriteMap = {
  [key in FAVORITE]: string[];
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

  getFavorites(type: FAVORITE): Observable<Array<string>> {
    return of(favoriteMap[type]).pipe(delay(1000));
  }

  toggleIsFavorite(id: string, type: FAVORITE): void {
    favoriteMap[type].includes(id)
      ? favoriteMap[type].splice(favoriteMap[type].indexOf(id), 1)
      : favoriteMap[type].push(id);
  }

  checkIfFavored(id: string, type: FAVORITE): boolean {
    return favoriteMap[type].includes(id)
      ? true
      : false;
  }
}
