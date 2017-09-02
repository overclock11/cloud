import { Component, OnInit,Renderer, ElementRef } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Injectable,Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-registervideo',
  templateUrl: './registervideo.component.html',
  styleUrls: ['./registervideo.component.css']
})
export class RegistervideoComponent implements OnInit {
  public archivoVideo:FormData;
  public nuevoUsuario ={};

  constructor(public dialogRef: MdDialogRef<RegistervideoComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  registrarVideo(){
    console.log("registrarVideo");
  }
  archivoSeleccionado($event){
    this.archivoVideo = $event.target.files[0];
  }

}
