import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseURL = `https://petshop-owxl.onrender.com/auth`;


  getUser(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}/${data}`)
  }


}
