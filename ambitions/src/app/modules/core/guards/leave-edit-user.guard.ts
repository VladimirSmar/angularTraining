import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserShellComponent } from '../../users/pages/edit-user-shell/edit-user-shell.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveEditUserGuard implements CanDeactivate<EditUserShellComponent> {
  canDeactivate(
    component: EditUserShellComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return true;
  }

}
