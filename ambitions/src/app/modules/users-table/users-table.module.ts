import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTableShellComponent } from './pages/ui-table-shell/ui-table-shell.component';
import { ServerTableShellComponent } from './pages/server-table-shell/server-table-shell.component';
import { UiTableComponent } from './components/ui-table/ui-table.component';
import { ServerTableComponent } from './components/server-table/server-table.component';
import { UsersTableRoutingModule } from './users-table-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PipeModule } from '../shared/modules/pipe-module.module';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    UiTableShellComponent,
    ServerTableShellComponent,
    UiTableComponent,
    ServerTableComponent,
  ],
  imports: [
    CommonModule,
    UsersTableRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    PipeModule,
    MatSortModule,
  ],
  exports: [UiTableShellComponent, ServerTableShellComponent],
})
export class UsersTableModule {}
