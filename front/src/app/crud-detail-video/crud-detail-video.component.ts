
import { Component, OnInit } from '@angular/core';
import { ConcursosService} from '../services/concursos.service';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-crud-detail-video',
  templateUrl: './crud-detail-video.component.html',
  styleUrls: ['./crud-detail-video.component.css']
})
export class CrudDetailVideoComponent implements OnInit {

constructor(private concursosService:ConcursosService, private ruta:ActivatedRoute, private router: Router) { }

  public video ={};
  public update = false;
  public sesion = false;
  public id: string;

ngOnInit() {
    this.ruta.params.subscribe( params =>{
        this.id = params['id']
        console.log(this.id)
      }
    );
    this.concursosService.getCompetitionByIdString(this.id).subscribe(
      respuesta =>{
          respuesta = respuesta.json();
          console.log(respuesta);
          this.video = respuesta;
          console.log(this.video);
      },
      error=>console.log(error)
    )
  }

   actualizarVideo(){
  }

}
