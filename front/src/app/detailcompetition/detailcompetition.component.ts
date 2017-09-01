import { Component, OnInit } from '@angular/core';
import {ConcursosService} from '../services/concursos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detailcompetition',
  templateUrl: './detailcompetition.component.html',
  styleUrls: ['./detailcompetition.component.css']
})
export class DetailcompetitionComponent implements OnInit {
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
