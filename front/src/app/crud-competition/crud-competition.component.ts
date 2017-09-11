import { Component, OnInit } from '@angular/core';
import {ConcursosService} from '../services/concursos.service';
import {SessionStorageService} from 'ng2-webstorage';

@Component({
  selector: 'app-crud-competition',
  templateUrl: './crud-competition.component.html',
  styleUrls: ['./crud-competition.component.css']
})

export class CrudCompetitionComponent implements OnInit {

  public listOfCompetitions;
  public p:number=1;
  constructor(private concursosService:ConcursosService,private storage:SessionStorageService) { }

  ngOnInit() {
    let usuarioId = this.storage.retrieve("usuario");
    usuarioId= JSON.parse(usuarioId);

    this.concursosService.getAllCompetitionsAdmin(usuarioId[0].id).subscribe(
      respuesta =>{
          respuesta = respuesta.json();
          console.log(respuesta);
          this.listOfCompetitions = respuesta;
      },
      error=>console.log(error)
    )
  }

  eliminarConcurso(id){
    this.concursosService.deleteCompetition(id).subscribe(respuesta=>{
      this.ngOnInit();
    },error=>{
      console.log(error);
    });
  }

}
