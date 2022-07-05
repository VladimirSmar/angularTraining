import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { UserDetailsService } from '../../services/user-details.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit, OnDestroy {
  myDate: number;
  user: IUser | null;
  _subscription: Subscription = new Subscription();

  constructor(private userDetailsService: UserDetailsService) {}

  ngOnInit(): void {
    this.myDate = Date.now();
    this._subscription.add(
      this.userDetailsService.user.subscribe((user) => {
        this.user = user;
      })
    );
  }

  ngOnDestroy(): void {
      this._subscription.unsubscribe();
  }
}
