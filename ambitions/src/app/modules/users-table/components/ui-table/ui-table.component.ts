import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/modules/users/interfaces/user';
import { UiTableService } from '../../services/ui-table.service';

@Component({
  selector: 'app-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss'],
})
export class UiTableComponent implements OnInit, AfterViewInit, OnDestroy {
  _subscription: Subscription = new Subscription();
  tableLength: number = 128;
  displayedColumns: string[] = ['name', 'email', 'age', 'gender', 'addresses'];
  dataSource: MatTableDataSource<IUser> = new MatTableDataSource<IUser>([]);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private uiTableService: UiTableService) {
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

  ngOnInit(): void {
    this._subscription.add(
      this.uiTableService.users.subscribe((users: IUser[]) => {
        this.dataSource.data = users;
      })
    );
  }
  ngOnDestroy(): void {
      this._subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
