import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { UserDetailsService } from '../../services/user-details.service';
import { UsersService } from '../../services/users.service';

type InfoTabIndexMap = {
  [key: number]: string;
};

const infoTabIndexMap: InfoTabIndexMap = {
  0: 'company',
  1: 'personal',
  2: 'contacts',
};

@Component({
  selector: 'app-user-details-shell',
  templateUrl: './user-details-shell.component.html',
  styleUrls: ['./user-details-shell.component.scss'],
})
export class UserDetailsShellComponent implements OnInit, OnDestroy {
  _subscription: Subscription = new Subscription();
  user: IUser | null = null;
  user$: Observable<IUser>;
  userId: string;
  pageIndex: string;

  constructor(
    private usersService: UsersService,
    private userDetailsService: UserDetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this._subscription.add(
      this.route.paramMap.subscribe((params) => {
        this.userId = params.get('id')!;
        this.pageIndex = params.get('pageIndex')!;
      })
    );
    this.user$ = this.usersService.getUserById(this.pageIndex, this.userId);
  }

  ngOnInit(): void {
    this._subscription.add(
      this.user$.subscribe((user) => {
        this.user = user;
        this.userDetailsService.user.next(user);
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  navigateTo(event: MatTabChangeEvent): void {
    this.router.navigate([infoTabIndexMap[event.index]], {
      relativeTo: this.route,
    });
  }
}
