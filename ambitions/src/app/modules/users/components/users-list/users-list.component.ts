import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoritesService } from 'src/app/modules/shared/services/favorites.service';
import { FAVORITE } from 'src/app/modules/shared/enums/favoriteCards';
import { IUser } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() users: IUser[];
  @Output() toggleIsFavoriteEvent: EventEmitter<IUser> =
    new EventEmitter<IUser>();

  constructor(
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  toggleIsFavorite(user: IUser): void {
    this.toggleIsFavoriteEvent.emit(user);
  }

  checkIfFavored(userId: number): boolean {
    return this.favoritesService.checkIfFavored(userId, FAVORITE.User);
  }

  editUser(id: number): void {
    this.router.navigateByUrl(`/users/edit/${id}`);
  }
}
