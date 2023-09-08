/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any = {};

  username = '';


  constructor(private userService: UserService, private router: Router, private loginService: LoginService) { }
  async ngOnInit(): Promise<void> {
    const token = window.localStorage.getItem('token');
    if (token) {

      this.loginService.getMe().pipe(
        catchError((error) => {
          // Imprime o erro no console para depuração
          if (error.status >= 400) {
            this.router.navigate(['/login']);
          }
          return error; // Passa o erro para o fluxo de observação para que possa ser tratado em outros pontos
        })
      ).subscribe(res => {
        this.user = res;

      });
    } else {
      this.router.navigate(['/login']);
    }
  }
  logout() {
    window.localStorage.removeItem('token');


    this.router.navigate(['/']);
  }
}


