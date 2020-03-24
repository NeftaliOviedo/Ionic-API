import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoEstudiantesPageRoutingModule } from './listado-estudiantes-routing.module';

import { ListadoEstudiantesPage } from './listado-estudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoEstudiantesPageRoutingModule
  ],
  declarations: [ListadoEstudiantesPage]
})
export class ListadoEstudiantesPageModule {}
