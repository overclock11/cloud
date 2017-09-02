import { Component, OnInit } from '@angular/core';
import {ConcursosService} from '../services/concursos.service';
import { RouterLink,ActivatedRoute } from '@angular/router';
import {RegistervideoComponent} from '../registervideo/registervideo.component';
import { Injectable,Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-detailcompetition',
  templateUrl: './detailcompetition.component.html',
  styleUrls: ['./detailcompetition.component.css']
})
export class DetailcompetitionComponent implements OnInit {
  public listOfCompetitions;
  public url: string;
  public name: string;
  constructor(private concursosService:ConcursosService,public dialog: MdDialog,private ruta:ActivatedRoute) { }

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
      },
      error=>console.log(error)
    )
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(RegistervideoComponent, {
      width: '80%',
      height:'70%',
      data: { url: this.url }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
