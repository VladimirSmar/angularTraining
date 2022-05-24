import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input()
  user!: IUser;
  @Output() logEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  emitLoggerEvent(userName: string): void {
    this.logEvent.emit(userName);
  }

  deactivateUser(user: IUser): IUser {
    user.age > 18
      ? (user = { name: user.name, age: user.age, activated: false })
      : '';
    this.user = user;
    return user;
  }
}
