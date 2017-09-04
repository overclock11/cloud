import { Component, OnInit } from '@angular/core';
import {ConcursosService} from '../services/concursos.service';

@Component({
  selector: 'app-crud-competition',
  templateUrl: './crud-competition.component.html',
  styleUrls: ['./crud-competition.component.css']
})

export class CrudCompetitionComponent implements OnInit {

  public listOfCompetitions;
  constructor(private concursosService:ConcursosService) { }

  ngOnInit() {
    this.concursosService.getCompetitions().subscribe(
      respuesta =>{
          respuesta = respuesta.json();
          console.log(respuesta);
          this.listOfCompetitions = respuesta;
      },
      error=>console.log(error)
    )
  }

}
