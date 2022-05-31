import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/modules/users/services/users.service';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss'],
})
export class AddUserShellComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  addNewUser(newUserValues: Object): void {
    this.usersService.addNewUser(newUserValues);
    this.router.navigateByUrl('/users');
  }
}
