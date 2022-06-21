import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IUser } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss'],
})
export class EditUserShellComponent implements OnInit {
  userId: number;
  user: IUser;
  hasUnsavedChanges: boolean = true;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = +params.get('id')!;
    });
  }

  ngOnInit(): void {
    this.usersService.getUserById(this.userId).subscribe((user: IUser) => {
      this.user = user;
    });
  }

  canDeactivate(hasUnsavedChanges: boolean): void {
    this.hasUnsavedChanges = hasUnsavedChanges;
  }
}
