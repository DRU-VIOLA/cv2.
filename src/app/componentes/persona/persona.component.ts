import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
  
    export class Persona implements OnInit { 
    id? : number;
    nombre : String;
    apellido : String;
    email : String;
    sobre_mi : String;
    url_foto : String;

  
  personas: Persona[] = [];
  personaService: any;

  constructor(nombre : String, apellido : String, email : String, sobre_mi : String, url_foto : String) {
           
           this.nombre = nombre;
           this.apellido= apellido;
           this.email= email;
           this.sobre_mi= sobre_mi;
           this.url_foto= url_foto;
   }

ngOnInit(): void {
  this.cargarPersonas();
}
cargarPersonas():void {
  this.personaService.verPersonas().suscribe((data: Persona[]) => {this.personas= data;}),
    (  err: any) =>{console.log (err);}
}
  }
