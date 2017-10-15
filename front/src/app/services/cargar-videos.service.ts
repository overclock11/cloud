import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import configuracion from '../app.config';

@Injectable()
export class CargarVideosService {
  public base:string = "http://"+configuracion.endpointWorker+":3000/api/mvideos/";
  constructor(private http:Http) { }


  uploadVideo(datos:FormData): Observable<Response>{
    let headers = {'Content-Type': 'multipart/form-data'};
    return this.http.post("http://"+configuracion.endpointWorker+":3001/api/videos/upload",datos,headers)
    .catch((err)=>Observable.throw("Algo salio mal",err));
  }
  registrarVideo(participante:any): Observable<Response>{
    return this.http.post(this.base+"crear",participante).catch((err)=>Observable.throw("Algo salio mal",err));
  }

  getVideoById(id:number): Observable<Response>{
    return this.http.get(this.base+""+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  desactivarVideo(id:number):Observable<Response>{
    return this.http.delete(this.base+""+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }
}
