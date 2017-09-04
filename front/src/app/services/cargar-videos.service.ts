import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CargarVideosService {
  public base:string = "http://localhost:1337/video/";
  constructor(private http:Http) { }
  uploadVideo(datos:FormData): Observable<Response>{
    let headers = {'Content-Type': 'multipart/form-data'};
    return this.http.post("http://localhost:1337/video/upload",datos,headers)
    .catch((err)=>Observable.throw("Algo salio mal",err));
  }
  registrarVideo(participante:any): Observable<Response>{
    return this.http.post(this.base+"registrar-participante",participante).catch((err)=>Observable.throw("Algo salio mal",err));
  }

  getVideoById(id:number): Observable<Response>{
    return this.http.get(this.base+""+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }
}
