
import { Component, OnInit } from '@angular/core';
import { CargarVideosService} from '../services/cargar-videos.service';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-crud-detail-video',
  templateUrl: './crud-detail-video.component.html',
  styleUrls: ['./crud-detail-video.component.css']
})
export class CrudDetailVideoComponent implements OnInit {

constructor(private cargarVideosService:CargarVideosService, private ruta:ActivatedRoute, private router: Router) { }

  public video ={};
  public competitor ={};
  public update = false;
  public sesion = false;
  public id: number;

ngOnInit() {
    this.ruta.params.subscribe( params =>{
        this.id = params['id']
        console.log(this.id)
      }
    );
    this.cargarVideosService.getVideoById(this.id).subscribe(
      respuesta =>{
          respuesta = respuesta.json();
          console.log(respuesta);
          this.competitor = respuesta["competitor"];
          this.video = respuesta;
          
          console.log(this.video);
          console.log(this.competitor);
      },
      error=>console.log(error)
    )
  }

   actualizarVideo(){
  }

}
