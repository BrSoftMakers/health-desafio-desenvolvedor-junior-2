import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit {
  pets: any = [];
  paginaAtual = 1;
  constructor(private petService: PetService) { }

  async ngOnInit() {

    this.petService.getPets().subscribe((data: any) => {
      this.pets = data;

    }
    )

  }
}
