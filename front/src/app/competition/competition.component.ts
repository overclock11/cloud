import { Component, OnInit } from '@angular/core';
import {ConcursosService} from '../services/concursos.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  public listOfCompetitions;
  constructor(private concursosService:ConcursosService) { }

  ngOnInit() {
    this.concursosService.getCompetitionsHome().subscribe(
      respuesta =>{
          respuesta = respuesta.json();
          console.log(respuesta);
          this.listOfCompetitions = respuesta;
      },
      error=>console.log(error)
    )
  }

}
