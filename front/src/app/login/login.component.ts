import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {LocalStorageService, LocalStorage, SessionStorageService} from 'ng2-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login={
    "username":"",
    "password":""
  };
  public mensaje:string="";
  constructor(private loginService:LoginService,private storage:SessionStorageService,private router:Router) { }

  ngOnInit() {
    console.log("LoginComponent")
  }
  iniciarSesion(){
    this.loginService.login(this.login).subscribe(respuesta =>{
      if (respuesta.json().length>0) {
        this.storage.store('usuario', JSON.stringify(respuesta.json()));
        let prueba = this.storage.retrieve("usuario")
        console.log(JSON.parse(prueba));
        this.router.navigate(['/home']);
      }
      else{
        this.mensaje ="¡Verifica tus datos de acceso!";
      }
    },error=>{
      this.mensaje ="¡Verifica tus datos de acceso!";
    });
  }

}
