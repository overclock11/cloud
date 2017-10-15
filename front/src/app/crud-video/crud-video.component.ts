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
  p:number=1;

  constructor(private concursosService:ConcursosService, private ruta:ActivatedRoute, private router: Router) { }


  ngOnInit() {

    this.ruta.params.subscribe( params =>{
        this.id = params['id'];
        console.log(this.id)
      }
    );

    this.concursosService.getVideosByCompetitionIDAdmin(this.id).subscribe(respuesta=>{
      let videos = respuesta.json();
      this.listOfvideos = respuesta.json();
      this.listOfvideos = this.listOfvideos.sort(function(uno,dos){
      	return new Date(uno.createdAt)< new Date(dos.createdAt);
      });
      console.log(this.listOfvideos);
    },error=>{
      console.log(error);
    });
  }

}
