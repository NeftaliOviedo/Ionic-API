import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/listado-estudiantes',
    pathMatch: 'full'
  },
  {
    path: 'listado-estudiantes',
    loadChildren: () => import('./listado-estudiantes/listado-estudiantes.module').then( m => m.ListadoEstudiantesPageModule)
  },
  {
    path: 'estudiante-detalle',
    loadChildren: () => import('./estudiante-detalle/estudiante-detalle.module').then( m => m.EstudianteDetallePageModule)
  },
  {
    path: 'agregar-estudiante' ,
    loadChildren: () => import('./agregar-estudiante/agregar-estudiante.module').then( m => m.AgregarEstudiantePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
