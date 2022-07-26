import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  merge,
  Subscription,
  startWith,
  switchMap,
  catchError,
  of,
  map,
} from 'rxjs';
import { IUser } from 'src/app/modules/users/interfaces/user';

@Component({
  selector: 'app-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.scss'],
})
export class ServerTableComponent implements OnInit, AfterViewInit, OnChanges {
  _subscriptions: Subscription = new Subscription();
  @Input() users: IUser[];
  @Output() tableEvent: EventEmitter<{}> = new EventEmitter<{}>();
  tableLength: number = 128;
  displayedColumns: string[] = ['name', 'email', 'age', 'gender', 'addresses'];
  dataSource: MatTableDataSource<IUser> = new MatTableDataSource<IUser>([]);

  resultsLength = 96;
  isTimeoutLimitReached = false;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
    this.dataSource.sortingDataAccessor = (item: any, property: string) => {
      switch (property) {
        case 'name':
          return `${item.lastName} ${item.firstName}`;
        case 'addresses':
          return `${item.addresses[0].addressLine}, ${item.addresses[0].city}, ${item.addresses[0].zip}`;
        default:
          return item[property];
      }
    };
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users'] && changes) {
      this.dataSource.data = changes['users'].currentValue;
    }
  }

  ngAfterViewInit(): void {
    this._subscriptions.add(
      this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0))
    );

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.backService!.getUsers(
            this.paginator.pageIndex + 1,
            this.paginator.pageSize,
            {
              active: this.sort.active,
              direction: this.sort.direction,
            }
          ).pipe(catchError(() => of(null)));
        }),
        map((data) => {
          this.isTimeoutLimitReached = data === null;

          if (data === null) {
            return [];
          }

          return data;
        })
      )
      .subscribe((data) => (this.data = data));

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
