import { Component, OnInit,Renderer, ElementRef } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Injectable,Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {LoginService} from '../login.service';
import {CargarVideosService} from '../services/cargar-videos.service';
import { ViewChild } from '@angular/core';
import {FileUploader} from 'ng2-file-upload/ng2-file-upload';

@Component({
  selector: 'app-registervideo',
  templateUrl: './registervideo.component.html',
  styleUrls: ['./registervideo.component.css']
})
export class RegistervideoComponent implements OnInit {
  @ViewChild('cargarVideov') cargarVideov;
  public archivoVideo:FormData;
  public registroVideo ={
    "username":"",
    "surname":"",
    "email":"",
    "description":"",
    "user_id":"",
    "competition_id":"",
    "video":  new FormData(),
    "name":"",
    "url":"",
    "createdAt": new Date()
  };
  public creacion;

  constructor(
    public dialogRef: MdDialogRef<RegistervideoComponent>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private loginService:LoginService,
    private videoService:CargarVideosService
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.registroVideo.competition_id = this.data.id;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  registrarVideo() {
    //PRIMERO  registra el usuario y obtiene el id
    this.creacion = true;
    this.loginService.registrarParticipante(this.registroVideo).subscribe(respuesta=>{
      console.log(respuesta);
      this.cargarVideo(respuesta.json());
    },error=>{
      console.log(error.json());
    });
  }

  cargarVideo(usuarioId){
    //segundo - carga el video y retorna la ruta para insertar en el registro de la base
    if (usuarioId.insertId) {
        usuarioId = usuarioId.insertId;
    }
    else{
      usuarioId = usuarioId[0].id;
    }
    let fileBrowser = this.cargarVideov.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      console.log(fileBrowser.files[0]);
      formData.append("video", fileBrowser.files[0]);
      this.videoService.uploadVideo(formData).subscribe(res => {
        let respuesta =res.json();
        console.log(usuarioId);

        this.crearRegistro(respuesta,fileBrowser.files[0].name,usuarioId);

      },error =>{
        console.log(error);
      });
    }
  }
  crearRegistro(ruta,name,usuarioId){
    //crea registro en tabla video
    this.registroVideo.url=ruta.ruta;
    this.registroVideo.user_id=usuarioId;
    this.registroVideo.createdAt=new Date();
    this.videoService.registrarVideo(this.registroVideo).subscribe(respuesta=>{
      this.creacion = false;
      this.dialogRef.close(true);
    },error=>{
      console.log(error)
    })
  }

}
