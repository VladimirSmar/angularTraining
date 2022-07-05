import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { UserDetailsService } from '../../services/user-details.service';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  user: IUser | null;
  _subscription: Subscription = new Subscription();

  constructor(private userDetailsService: UserDetailsService) {}

  ngOnInit(): void {
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
