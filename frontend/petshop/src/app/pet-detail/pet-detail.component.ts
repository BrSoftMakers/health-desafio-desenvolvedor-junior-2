import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../pets.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private petService: PetService) { }
  id: any = '';
  pet: any = {};
  pet_dono: any = {};
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.petService.getPet(this.id).subscribe((data: any) => {
      this.pet = data;
      this.pet_dono = data.dono;
      this.pet_dono.cpf = this.pet_dono.cpf.replace(/\D/g, '');

    }
    )
  }

}
