import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {app_rountig} from './app.routes';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MaterialModule} from '@angular/material';

import { HomeComponent } from './home/home.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    app_rountig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
