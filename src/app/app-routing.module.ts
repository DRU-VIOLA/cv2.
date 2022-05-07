import { NgModule } from "@angular/core";
import { PersonaComponent } from "./componentes/persona/persona.component";
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {path: '', component: PersonaComponent},
    {path: 'ver/personas', component: PersonaComponent},
    {path: 'new/persona', component: PersonaComponent},
    {path: 'delete/ :id', component: PersonaComponent},
    {path: 'editar/ :id', component: PersonaComponent},
    {path: '**', component: PersonaComponent}
  ];

  @NgModule({
      imports: [RouterModule.forRoot(routes),],
      exports: [RouterModule]
  })
  export class AppRoutingModule {}