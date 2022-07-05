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
  @Input() pageIndex: number;
  @Output() toggleIsFavoriteEvent: EventEmitter<IUser> =
    new EventEmitter<IUser>();
  @Output() exportUserToExcelEvent: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() saveUserEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  toggleIsFavorite(user: IUser): void {
    this.toggleIsFavoriteEvent.emit(user);
  }

  checkIfFavored(userId: string): boolean {
    return this.favoritesService.checkIfFavored(userId, FAVORITE.User);
  }

  exportUserToExcel(id: string): void {
    this.exportUserToExcelEvent.emit(id);
  }

  saveUser(id: string): void {
    this.saveUserEvent.emit(id);
  }

  editUser(id: string): void {
    this.router.navigateByUrl(`/users/edit/${this.pageIndex}/${id}`);
  }

  viewUser(id: string): void {
    this.router.navigateByUrl(`/users/view/${this.pageIndex}/${id}`);
  }
}
