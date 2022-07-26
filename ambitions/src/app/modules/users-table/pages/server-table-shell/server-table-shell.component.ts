import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/modules/users/interfaces/user';

@Component({
  selector: 'app-server-table-shell',
  templateUrl: './server-table-shell.component.html',
  styleUrls: ['./server-table-shell.component.scss'],
})
export class ServerTableShellComponent implements OnInit, OnDestroy {
  tableLength: number = 10;
  _subscription: Subscription = new Subscription();
  users: IUser[];

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onTableEventTrigger(options: {}): void {

  }
}
