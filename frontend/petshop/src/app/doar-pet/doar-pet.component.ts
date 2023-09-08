import { Component, OnInit } from '@angular/core';
import { PetService } from '../pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PetDetailComponent } from '../pet-detail/pet-detail.component';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-doar-pet',
  templateUrl: './doar-pet.component.html',
  styleUrls: ['./doar-pet.component.css']
})
export class DoarPetComponent implements OnInit {
  id: any = '';
  cpfDono: string = '';
  cpfNovoDono: string = '';
  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(doarForm: any) {
    this.id = this.route.snapshot.paramMap.get('id');

    const data = {
      cpfDono: doarForm.value.cpfDono,
      cpfNovoDono: doarForm.value.cpfNovoDono
    }
    console.log(data);
    this.petService.doarPet(data, this.id).pipe(
      catchError((error) => {
        alert(error.error.message);
        if (error.status === 401) {
          this.router.navigate(['/']);
        }
        return error;
      })).subscribe(res => {
        alert('Pet doado com sucesso!');
        this.router.navigate(['/']);
      })
  }
}
