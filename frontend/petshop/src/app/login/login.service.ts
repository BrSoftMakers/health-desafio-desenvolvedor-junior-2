import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:3000/auth/login`;


  login(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}`, data)
  }


}
