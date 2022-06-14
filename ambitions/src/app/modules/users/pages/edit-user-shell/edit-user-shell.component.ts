import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe( params => {
      this.userId = +params.get('id')!
    })
  }

  ngOnInit(): void {
    this.user = this.usersService.getUserById(this.userId);
  }
}
