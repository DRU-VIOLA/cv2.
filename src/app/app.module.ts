import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersonaComponent } from './componentes/persona/persona.component';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    //EncabezadoComponent,
    //EstudiosComponent,
    //ExperienciaComponent,
    //HabilidadesComponent,
    //IdiomasComponent,
    //ProyectosComponent
  ],
      
  imports:[
  BrowserModule, 
  AppRoutingModule, 
  HttpClientModule, 
  FormsModule],
  
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
