import { Component, OnInit,Renderer, ElementRef } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Injectable,Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {LoginService} from '../login.service';


@Component({
  selector: 'app-registervideo',
  templateUrl: './registervideo.component.html',
  styleUrls: ['./registervideo.component.css']
})
export class RegistervideoComponent implements OnInit {
  public archivoVideo:FormData;
  public registroVideo ={};
  public datosRegistro ={};
  public usuarioCreado ={};

  constructor(
    public dialogRef: MdDialogRef<RegistervideoComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private loginService:LoginService
  ) { }

  ngOnInit() {
    console.log(this.data);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  registrarVideo(){
    //Crea el registro en la tabla de usuarios
    console.log(this.registroVideo)
    this.loginService.registerUser(this.registroVideo).subscribe(
      respuesta =>{
          respuesta = respuesta.json();
          this.usuarioCreado= respuesta;
          console.log(respuesta);
      },
      error=>console.log(error)
    )

  }
  archivoSeleccionado($event){
    this.archivoVideo = $event.target.files[0];
  }

}
