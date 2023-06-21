/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  private baseURL = `http://localhost:3000/pets`;

  getPets(): Observable<any> {
    return this.http.get(`${this.baseURL}`)
  }
  getMyPets(): Observable<any> {
    return this.http.get(`${this.baseURL}/meus-pets`)
  }
  getUser(data: any): Observable<any> {
    return this.http.get(`${this.baseURL}/${data}`)
  }
  getPet(id: any): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`)
  }
  createPet(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}`, data)
  }
  deletePet(id: any): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`)
  }
  atualizarPet(id: any, data: any): Observable<any> {
    return this.http.patch(`${this.baseURL}/${id}`, data)
  }
  doarPet(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/doar/${id}`, data)
  }
}
