import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyPetsComponent } from './my-pets/my-pets.component';
import { AuthInterceptor } from './login/auth.interceptor';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { DoarPetComponent } from './doar-pet/doar-pet.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CpfFormatPipe } from './pipes/cpf.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    ListPetsComponent,
    MyPetsComponent,
    PetDetailComponent,
    PetCreateComponent,
    PetEditComponent,
    DoarPetComponent,
    CadastroComponent,
    CpfFormatPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
