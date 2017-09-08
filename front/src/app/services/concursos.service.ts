import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ConcursosService {
  public base:string = "http://localhost:3000/api/competition/";
  constructor(private http:Http) { }

  getAllCompetitionsAdmin(id): Observable<Response>{
    return this.http.get(this.base+"competitions/admin/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getCompetitionsHome(): Observable<Response>{
    return this.http.get(this.base+"competitions").catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getCompetitionByUrl(url:string): Observable<Response>{
    return this.http.get(this.base+"url/"+url).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getCompetitionById(id:number): Observable<Response>{
    return this.http.get(this.base+"id/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getCompetitionByIdString(id:string): Observable<Response>{
    return this.http.get(this.base+"id/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  updateCompetitionByID(concurso:any): Observable<Response>{
    return this.http.put(this.base+"update/"+concurso.id,concurso).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  registerCompetition(concurso:any):Observable<Response>{
    return this.http.post(this.base+"crear",concurso).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getVideosByCompetitionID(id:number):Observable<Response>{
    return this.http.get("http://localhost:3000/api/videos/competition/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }

  deleteCompetition(id:number):Observable<Response>{
    return this.http.delete(this.base+"eliminar/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }


}
