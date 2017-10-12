import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import configuracion from '../app.config';

@Injectable()
export class ConcursosService {
  public base:string = "http://"+configuracion.endpoint+":3000/api/competition/";
  constructor(private http:Http) { }

  getAllCompetitionsAdmin(id): Observable<Response>{
    return this.http.get(this.base+"competitions/madmin/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getCompetitionsHome(): Observable<Response>{
    return this.http.get(this.base+"mcompetitions").catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getCompetitionByUrl(url:string): Observable<Response>{
    return this.http.get(this.base+"murl/"+url).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getCompetitionById(id:number): Observable<Response>{
    return this.http.get(this.base+"mid/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getCompetitionByIdString(id:string): Observable<Response>{
    return this.http.get(this.base+"mid/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  updateCompetitionByID(concurso:any): Observable<Response>{
    return this.http.put(this.base+"mupdate/"+concurso.id,concurso).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  registerCompetition(concurso:any):Observable<Response>{
    return this.http.post(this.base+"mcrear",concurso).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getVideosByCompetitionID(id:number):Observable<Response>{
    return this.http.get("http://"+configuracion.endpoint+":3000/api/videos/competition/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getVideosByCompetitionIDAdmin(id:number):Observable<Response>{
    return this.http.get("http://"+configuracion.endpoint+":3000/api/videos/competition/admin/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }

  deleteCompetition(id:number):Observable<Response>{
    return this.http.delete(this.base+"meliminar/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }


}
