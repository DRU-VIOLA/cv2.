import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../componentes/persona/persona.component';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaURL = 'http://localhost:8080/';


  constructor(private httpClient: HttpClient) { }

    public verPersonas(): Observable<Persona[]>{
      return this.httpClient.get<Persona[]>(this.personaURL + 'ver/personas');
    }
    public agregarPersona(): Observable<any>{
      return this.httpClient.post<any>(this.personaURL + 'new/persona', {});
    }
    public borrarPersona(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.personaURL + `delete/${id}`);
    }
    public editarPersona(id: number): Observable<any>{
      return this.httpClient.put<any>(this.personaURL + `editar/${id}`, Persona);
    }
  
  }

