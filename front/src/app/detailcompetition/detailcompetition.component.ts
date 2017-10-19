import { Component, OnInit } from '@angular/core';
import {ConcursosService} from '../services/concursos.service';
import { RouterLink,ActivatedRoute } from '@angular/router';
import {RegistervideoComponent} from '../registervideo/registervideo.component';
import { Injectable,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AfterViewInit } from '@angular/core';


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
  public p:number=1;
  public idcompetencia:string;
  constructor(private concursosService:ConcursosService,
    public dialog: MatDialog,
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
        this.listaVideos =respuesta;
        if(this.listaVideos.length==1 && Object.keys(this.listaVideos[0]).length==1){
          this.idcompetencia= this.listaVideos[0].competitionId;
          this.listaVideos = new Array();
        }
        else{
          this.idcompetencia=this.listaVideos[0].competitionId;
          this.listaVideos = this.listaVideos.sort(function(uno,dos){
            return new Date(uno.createdAt)< new Date(dos.createdAt);
          });
        }
        console.log(this.listaVideos);
      },
      error=>console.log(error)
    )
  }

  enlaces(enlace) {
    // enlace = enlace.replace(/\\/g,"/");
    // enlace = enlace.substring(enlace.indexOf("/assets"));
    return this.sanitizer.bypassSecurityTrustUrl(enlace);
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(RegistervideoComponent, {
      width: '80%',
      height:'70%',
      data: { url: this.url, id: this.idcompetencia}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.creadoConExito = true;
      }
    });
  }
  /*cargarVideosConcurso(id){
    this.concursosService.getVideosByCompetitionID(id).subscribe(respuesta=>{
      this.listaVideos = respuesta.json();
      this.listaVideos = this.listaVideos.sort(function(uno,dos){
      	return new Date(uno.createdAt)< new Date(dos.createdAt);
      });
      console.log(this.listaVideos);
    },error=>{
      console.log(error);
    });
  }*/

}
