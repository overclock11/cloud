
import { Component, OnInit } from '@angular/core';
import { CargarVideosService} from '../services/cargar-videos.service';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-crud-detail-video',
  templateUrl: './crud-detail-video.component.html',
  styleUrls: ['./crud-detail-video.component.css']
})
export class CrudDetailVideoComponent implements OnInit {

constructor(private cargarVideosService:CargarVideosService,
  private ruta:ActivatedRoute,
  private router: Router,
  private sanitizer:DomSanitizer) { }

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
          this.video = respuesta[0];
          console.log(this.video);
      },
      error=>console.log(error)
    )
  }
  enlaces(enlace) {
    // enlace = enlace.replace(/\\/g,"/");
    // enlace = enlace.substring(enlace.indexOf("/assets"));
    return this.sanitizer.bypassSecurityTrustUrl(enlace);
  }
  desactivarVideo(){
    this.cargarVideosService.desactivarVideo(this.id).subscribe(respuesta =>{
      console.log(respuesta);
    },error=>{
      console.log(error);
    });
  }

}
