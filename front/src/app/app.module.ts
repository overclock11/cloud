import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {app_rountig} from './app.routes';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MaterialModule,MdNativeDateModule} from '@angular/material';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';


import { HomeComponent } from './home/home.component';
import 'hammerjs';
import { CompetitionComponent } from './competition/competition.component';
import { DetailcompetitionComponent } from './detailcompetition/detailcompetition.component';
import { RegistervideoComponent } from './registervideo/registervideo.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CrudCompetitionComponent } from './crud-competition/crud-competition.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ConcursoGestionComponent } from './concurso-gestion/concurso-gestion.component';
import { CreateCompetitionComponent } from './create-competition/create-competition.component';
import { CrudVideoComponent } from './crud-video/crud-video.component';
import { CrudDetailVideoComponent } from './crud-detail-video/crud-detail-video.component';
import { LoginComponent } from './login/login.component';

//servicios
import {LoginService} from './login.service';
import {ConcursosService} from './services/concursos.service';
import {CargarVideosService} from './services/cargar-videos.service';
import {LocalStorageService,SessionStorageService} from 'ng2-webstorage';
//import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetitionComponent,
    DetailcompetitionComponent,
    RegistervideoComponent,
    RegisterUserComponent,
    CrudCompetitionComponent,
    HomeAdminComponent,
    ConcursoGestionComponent,
    CreateCompetitionComponent,
    CrudVideoComponent,
    CrudDetailVideoComponent,
    LoginComponent,
    //NgxPaginationModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    MdNativeDateModule,
    app_rountig,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // lleva todas las ventanas modales
  entryComponents: [
    RegistervideoComponent,
  ],
  providers: [LoginService,ConcursosService,CargarVideosService,SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
