import { Component, OnInit } from '@angular/core';
import { UserService } from '../cores/services/user.service';
import { IUser } from '../cores/interfaces/i-user';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrl: './day5.component.css'
})
export class Day5Component implements OnInit {
  users: IUser[] = [];
  loading: boolean = false;
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.userService
          .all()
          // .pipe(timeout(100))
          .subscribe((responseUser: IUser[]) => {
            this.users = responseUser;
            this.loading = false;
          });
    }, 100);
  }
}
