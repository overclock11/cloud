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
  getCompetitionByUrl(url:string): Observable<Response>{
    return this.http.get(this.base+"/url/"+url).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  getCompetitionById(id:number): Observable<Response>{
    return this.http.get(this.base+"/"+id).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  updateCompetitionByID(concurso:any): Observable<Response>{
    return this.http.post(this.base+"/"+concurso.id,concurso).catch((err)=>Observable.throw("Algo salio mal",err));
  }
  registerCompetition(concurso:any):Observable<Response>{
    return this.http.post(this.base,concurso).catch((err)=>Observable.throw("Algo salio mal",err));
  }
}
