import { Component, OnInit } from '@angular/core';
import { ConcursosService} from '../services/concursos.service';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-concurso-gestion',
  templateUrl: './concurso-gestion.component.html',
  styleUrls: ['./concurso-gestion.component.css']
})
export class ConcursoGestionComponent implements OnInit {
  public competition ={};
  public update = false;
  public sesion = false;
  public id: string;
  public creadoConExito;
  
  constructor(private concursosService:ConcursosService, private ruta:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.ruta.params.subscribe( params =>{
        this.id = params['id']
        console.log(this.id)
      }
    );
    this.concursosService.getCompetitionByID(this.id).subscribe(
      respuesta =>{
          respuesta = respuesta.json();
          console.log(respuesta);
          this.competition = respuesta;
          console.log(this.competition);
      },
      error=>console.log(error)
    )
  }

  actualizarCompetitions(){
    this.update = true;
    console.log("entro a update");
    this.concursosService.updateCompetitionByID(this.competition).subscribe(
      respuesta =>{
          respuesta = respuesta.json()
          console.log("fredy");
          console.log(respuesta);
      },
      error=>console.log(error)
    )
    this.router.navigate(['crud-competition']);
  }

}