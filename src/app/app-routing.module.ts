import { NgModule } from "@angular/core";
import { Persona } from "./componentes/persona/persona.component";
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {path: '', component: Persona},
    {path: 'ver/personas', component: Persona},
    {path: 'new/persona', component: Persona},
    {path: 'delete/ :id', component: Persona},
    {path: 'editar/ :id', component: Persona},
    {path: '**', component: Persona}
  ];

  @NgModule({
      imports: [RouterModule.forRoot(routes),],
      exports: [RouterModule]
  })
  export class AppRoutingModule {}