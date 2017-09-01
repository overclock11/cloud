import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {app_rountig} from './app.routes';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MaterialModule} from '@angular/material';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './home/home.component';
import 'hammerjs';
import { CompetitionComponent } from './competition/competition.component';
import { DetailcompetitionComponent } from './detailcompetition/detailcompetition.component';
import { RegistervideoComponent } from './registervideo/registervideo.component';
import { RegisterUserComponent } from './register-user/register-user.component';

//servicios
import {LoginService} from './login.service';
import {ConcursosService} from './services/concursos.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetitionComponent,
    DetailcompetitionComponent,
    RegistervideoComponent,
    RegisterUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    app_rountig,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,ConcursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
