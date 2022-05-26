import { FAVORITE } from "../enums/favoriteCards";

export interface Favorite {
  type: FAVORITE,
  id: number,
  name: string,
}
