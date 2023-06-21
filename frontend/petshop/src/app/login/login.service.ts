import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private baseURL = `https://petshop-nqsz.onrender.com/auth`;


  login(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/login`, data)
  }
  cadastro(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}`, data)
  }
  getMe(): Observable<any> {
    return this.http.get(`${this.baseURL}/me`)
  }



}
