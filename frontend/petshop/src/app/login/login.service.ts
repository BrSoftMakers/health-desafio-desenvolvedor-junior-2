import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private baseURL = `https://petshop-nqsz.onrender.com/auth/login`;


  login(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}`, data)
  }
  cadastro(data: any): Observable<any> {
    return this.http.post(`https://petshop-nqsz.onrender.com/auth`, data)
  }


}
