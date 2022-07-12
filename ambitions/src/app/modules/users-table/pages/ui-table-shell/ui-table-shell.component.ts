import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/modules/users/interfaces/user';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { UiTableService } from '../../services/ui-table.service';

@Component({
  selector: 'app-ui-table-shell',
  templateUrl: './ui-table-shell.component.html',
  styleUrls: ['./ui-table-shell.component.scss'],
})
export class UiTableShellComponent implements OnInit, OnDestroy {
  tableLength: number = 128;
  _subscription: Subscription = new Subscription();
  users: IUser[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this._subscription.add(
      this.usersService
        .getUsers(0, this.tableLength)
        .subscribe((users: IUser[]) => {
          this.users = users;
        })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
