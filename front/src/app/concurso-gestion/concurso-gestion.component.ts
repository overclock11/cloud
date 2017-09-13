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
  public competition ={
    "name":"",
    "company":"",
    "url":"",
    "url_image_banner":"",
    "description":""
  };
  public update = false;
  public sesion = false;
  public id: string;
  public creadoConExito;

  constructor(private concursosService:ConcursosService, private ruta:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.ruta.params.subscribe( params =>{
        this.id = params['id']
      }
    );
    this.concursosService.getCompetitionByIdString(this.id).subscribe(
      respuesta =>{
          respuesta = respuesta.json();
          this.competition = respuesta[0];
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
          console.log(respuesta);
      },
      error=>console.log(error)
    )
    this.router.navigate(['/crud-competition']);
  }

}
