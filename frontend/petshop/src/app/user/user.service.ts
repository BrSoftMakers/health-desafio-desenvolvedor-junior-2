import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:3000/auth/user`;


  getUser(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}/${data}`)
  }


}
