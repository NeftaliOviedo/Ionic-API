import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoEstudiantesPage } from './listado-estudiantes.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoEstudiantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoEstudiantesPageRoutingModule {}
