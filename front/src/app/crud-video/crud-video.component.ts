import { Component, OnInit } from '@angular/core';
import { ConcursosService} from '../services/concursos.service';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-video',
  templateUrl: './crud-video.component.html',
  styleUrls: ['./crud-video.component.css']
})
export class CrudVideoComponent implements OnInit {


  public listOfvideos;
  public id: number;

  constructor(private concursosService:ConcursosService, private ruta:ActivatedRoute, private router: Router) { }


  ngOnInit() {

    this.ruta.params.subscribe( params =>{
        this.id = params['id']
        console.log(this.id)
      }
    );

    this.concursosService.getVideosByCompetitionID(this.id).subscribe(respuesta=>{
      let videos = respuesta.json();
      this.listOfvideos = respuesta.json();
      console.log(this.listOfvideos);
    },error=>{
      console.log(error);
    });
  }

}
