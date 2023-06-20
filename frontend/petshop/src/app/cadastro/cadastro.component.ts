import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }
  nome: string = '';
  email: string = '';
  senha: string = '';
  cpf: string = '';
  telefone: string = '';



  ngOnInit(): void {

  }

  onSubmit(form: any): void {
    if (form.invalid) {
      alert('Preencha todos os campos!');
      return;
    }
    const data = {
      nome: form.value.nome,
      email: form.value.email,
      senha: form.value.senha,
      cpf: form.value.cpf,
      telefone: form.value.telefone
    }
    this.loginService.cadastro(data).pipe(
      catchError((error) => {
        // Imprime o erro no console para depuração
        alert(error.error.message);
        return throwError(error); // Passa o erro para o fluxo de observação para que possa ser tratado em outros pontos
      })
    ).subscribe(res => {
      alert('Cadastro efetuado com sucesso!');
      this.router.navigate(['/login']);
    });

  }


}
