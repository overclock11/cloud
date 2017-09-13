import { Component, OnInit } from '@angular/core';
import { ConcursosService} from '../services/concursos.service';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {SessionStorageService} from 'ng2-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.css']
})
export class CreateCompetitionComponent implements OnInit {

  public competition ={
    "user_id":"",
    "createdAt":new Date(),
    "name":"",
    "company":"",
    "url":"",
    "url_image_banner":"",
    "description":"",
    "date_start":"",
    "date_end":""
  };
  public creacion = false;
  public sesion = false;
  constructor(private concursosService:ConcursosService,
     private ruta:ActivatedRoute, private router: Router,
     private storage:SessionStorageService
   ) { }


  ngOnInit() {
  }

  registerCompetition(){
    this.creacion = true;
    let usuario = this.storage.retrieve("usuario")
    usuario = JSON.parse(usuario);
    this.competition.user_id = usuario[0].id;
    this.competition.createdAt = new Date();
    console.log(this.competition);
    this.concursosService.registerCompetition(this.competition).subscribe(
      respuesta =>{
          respuesta = respuesta.json()
          this.creacion = false;
          this.sesion = true;
      },
      error=>console.log(error)
    )
    this.router.navigate(['/crud-competition']);
  }

}
