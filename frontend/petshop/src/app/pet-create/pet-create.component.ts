import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pets.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {
  pet: any = {
    nome: '',
    idade: null,
    raca: '',
    tipo: ''
  };
  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router) { }

  ngOnInit(): void {
    const token = window.localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
    }
  }
  cadastrarPet(cadastroForm: any) {
    // Lógica para enviar os dados do pet para o backend e realizar o cadastro
    if (cadastroForm.invalid) {
      alert('Preencha todos os campos!');
      return;
    }

    const data = {
      nome: cadastroForm.value.nome,
      idade: cadastroForm.value.idade,
      raca: cadastroForm.value.raca,
      tipo: cadastroForm.value.tipo
    }

    this.petService.createPet(data).subscribe((data: any) => {
      alert('Pet cadastrado com sucesso!');
      cadastroForm.reset();
    }, (error: any) => {
      alert('Erro ao cadastrar pet!');
    });

    console.log(cadastroForm.value);
  }
  onSubmit() {
    // Adicione aqui a lógica para enviar os dados do novo pet para o servidor

    // Limpar os campos após o envio
  }

}
