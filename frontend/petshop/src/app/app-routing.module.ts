import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPetsComponent } from './list-pets/list-pets.component';
import { LoginComponent } from './login/login.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ListPetsComponent },
  { path: 'criar-pet', component: PetCreateComponent },
  { path: 'meus-pets', component: MyPetsComponent },
  { path: 'pet/:id', component: PetDetailComponent },
  { path: 'pet-edit/:id', component: PetEditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
