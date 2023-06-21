import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

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
    this.petService.getMyPets().subscribe((data: any) => {
      this.pets = data;

    }
    )
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
