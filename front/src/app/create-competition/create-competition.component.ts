import { Component, OnInit } from '@angular/core';
import { ConcursosService} from '../services/concursos.service';
import { RouterLink,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.css']
})
export class CreateCompetitionComponent implements OnInit {

  public competition ={};
  public creacion = false;
  public sesion = false;
  constructor(private concursosService:ConcursosService, private ruta:ActivatedRoute, private router: Router) { }


  ngOnInit() {
  }

  registerCompetition(){
    this.creacion = true;
    this.concursosService.registerCompetition(this.competition).subscribe(
      respuesta =>{
          respuesta = respuesta.json()
          this.creacion = false;
          this.sesion = true;
      },
      error=>console.log(error)
    )
    this.router.navigate(['crud-competition']);
  }

}
