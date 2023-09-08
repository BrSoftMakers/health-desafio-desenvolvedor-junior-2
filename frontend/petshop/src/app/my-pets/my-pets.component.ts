import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {

  constructor(private petService: PetService, private http: HttpClient, private router: Router) { }

  pets: any = [];
  paginaAtual = 1;

  async ngOnInit() {

    const token = window.localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
    }
    this.petService.getMyPets().pipe(
      catchError((error) => {
        // Imprime o erro no console para depuração

        if (error.status >= 400) {
          this.router.navigate(['/login']);
        }
        return throwError(error); // Passa o erro para o fluxo de observação para que possa ser tratado em outros pontos
      }),
      tap((data: any) => {
        // Executa o código dentro do tap apenas se não houver erro
        this.pets = data;
      })
    ).subscribe();

  }
  deletePet(id: any) {
    this.petService.deletePet(id).subscribe((data: any) => {
      alert('Pet deletado com sucesso!');
      this.ngOnInit();
    }, (error: any) => {
      alert('Erro ao deletar pet!');
    }

    )

  }

}
