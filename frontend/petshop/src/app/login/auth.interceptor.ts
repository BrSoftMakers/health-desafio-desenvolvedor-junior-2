import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
    // Obtenha o token do localStorage ou de onde você o armazenou
    const token = localStorage.getItem('token');

    // Clone a requisição original e adicione o token no header Authorization
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,

        }

      });

      return next.handle(authReq);
    }

    // Se não houver token, simplesmente passe a requisição original

    return next.handle(req);
  }
}
