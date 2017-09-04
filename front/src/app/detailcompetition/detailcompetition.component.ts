import { Component, OnInit } from '@angular/core';
import {ConcursosService} from '../services/concursos.service';
import { RouterLink,ActivatedRoute } from '@angular/router';
import {RegistervideoComponent} from '../registervideo/registervideo.component';
import { Injectable,Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-detailcompetition',
  templateUrl: './detailcompetition.component.html',
  styleUrls: ['./detailcompetition.component.css']
})
export class DetailcompetitionComponent implements OnInit {
  public listOfCompetitions;
  public url: string;
  public id: string;
  public creadoConExito;
  public listaVideos;
  constructor(private concursosService:ConcursosService,
    public dialog: MdDialog,
    private ruta:ActivatedRoute,
    private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.ruta.params.subscribe( params =>{
        this.url = params['id']
        console.log(this.url)
      }
    );
    this.concursosService.getCompetitionByUrl(this.url).subscribe(
      respuesta =>{
          respuesta = respuesta.json();
          console.log(respuesta);
          this.listOfCompetitions = respuesta;
          this.cargarVideosConcurso(this.listOfCompetitions[0].id);
      },
      error=>console.log(error)
    )
  }
  enlaces(enlace) {
    return this.sanitizer.bypassSecurityTrustUrl(enlace);
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(RegistervideoComponent, {
      width: '80%',
      height:'70%',
      data: { url: this.url, id: this.listOfCompetitions[0].id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.creadoConExito = true;
      }
    });
  }
  cargarVideosConcurso(id){
    this.concursosService.getCompetitionById(id).subscribe(respuesta=>{
      let videos = respuesta.json();
      this.listaVideos = videos.videos;
      console.log(this.listaVideos);
    },error=>{
      console.log(error);
    });
  }

}
