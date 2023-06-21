/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  isLoggedIn: boolean = false;
  username = '';

  constructor(private userService: UserService, private router: Router) { }
  async ngOnInit() {
    const token = window.localStorage.getItem('token');

    if (token) {

      await this.userService.getUser(token).pipe(
        tap((res) => {

          this.isLoggedIn = true;
          this.username = res.usuario;
        })
      ).subscribe();
    }
  }
  logout() {
    window.localStorage.removeItem('token');
    this.isLoggedIn = false;
    location.reload();
    this.router.navigate(['/']);
  }
}


