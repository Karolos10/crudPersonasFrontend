import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  /* persona: Persona = new Persona(); */

  private Url: string = 'http://localhost:8080/ejemplo01/personas';

  constructor(private http:HttpClient) { }

  getPersonas() :Observable<Persona []> {
    return this.http.get<Persona []>(this.Url)
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url, persona);
  }
}
