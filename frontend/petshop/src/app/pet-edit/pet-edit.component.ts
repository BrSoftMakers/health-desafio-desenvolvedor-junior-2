import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pets.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router) { }
  id: any = '';
  pet: any = {
    nome: '',
    idade: null,
    raca: '',
    tipo: ''
  };

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.petService.getPet(this.id).subscribe(res => {
      this.pet = res;
    });
  }

  atualizarPet(updateForm: any): void {
    if (updateForm.invalid) {
      alert('Preencha todos os campos!');
      return;
    }
    this.petService.atualizarPet(this.id, this.pet).subscribe(res => {
      alert('Pet atualizado com sucesso!');
      this.router.navigate(['/meus-pets']);
    }
    );
  }
}



