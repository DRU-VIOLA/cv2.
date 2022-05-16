import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
  
    export class PersonaComponent implements OnInit { 
   persona: Persona = new Persona("","","","","");
  
  constructor(public personaService: PersonaService) { } 
  
  
ngOnInit(): void {
  this.personaService.verPersonas().subscribe(data => (this.persona = data))}
}
