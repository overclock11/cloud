import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }
  getUsers(): Observable<Response>{
    let base = "http://localhost:1337/user";
    return this.http.get(base).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  registerUser(usuario:any):Observable<Response>{
    let base = "http://localhost:1337/user";
    return this.http.post(base,usuario).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  registrarParticipante(usuario:any):Observable<Response>{
    let base = "http://localhost:1337/user/crear";
    return this.http.post(base,usuario).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  login(usuario:any):Observable<Response>{
    let base = "http://localhost:1337/user/login";
    return this.http.post(base,usuario).catch((err)=>Observable.throw("Algo salio mal",err));
  }

}
