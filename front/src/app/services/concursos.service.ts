import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ConcursosService {
  public base:string = "http://localhost:1337/competition";
  constructor(private http:Http) { }
  getCompetitions(): Observable<Response>{
    return this.http.get(this.base).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  // registerUser(usuario:any):Observable<Response>{
  //   return this.http.post(base,usuario).catch((err)=>Observable.throw("Algo salio mal",err));
  // }
}
