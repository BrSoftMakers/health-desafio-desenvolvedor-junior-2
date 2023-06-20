/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

import { catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoggedIn: boolean = false;
  email = '';
  senha = '';

  constructor(private loginService: LoginService, private router: Router) { }
  onSubmit() {

    const data = {
      email: this.email,
      senha: this.senha
    }
    this.loginService.login(data).pipe(
      tap((res) => {
        window.localStorage.setItem('token', res.token);
        this.isLoggedIn = true;
        alert('Login efetuado com sucesso!');
        this.router.navigate(['/']);
      }),
      catchError((error) => {
        alert('Login ou senha incorretos!');
        return throwError(error);
      })
    ).subscribe();


    // Adicione aqui a lógica para enviar os dados de login para o servidor


    // Limpar os campos após o envio
    this.email = '';
    this.senha = '';
  }
}
