import { Component, OnInit } from '@angular/core';
import { LoginService} from '../login.service';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public nuevoUsuario ={
    "username":"",
    "password":"",
    "name":"",
    "surname":"",
    "email":""
  };
  public creacion = false;
  public sesion = false;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  registrarUsuario(){
    this.creacion = true;
    this.loginService.registerUser(this.nuevoUsuario).subscribe(
      respuesta =>{
          respuesta = respuesta.json()
          console.log(respuesta);
          this.nuevoUsuario ={
            "username":"",
            "password":"",
            "name":"",
            "surname":"",
            "email":""
          };
          this.creacion = false;
          this.sesion = true;
      },
      error=>console.log(error)
    )
  }
}
