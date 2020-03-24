import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../service/estudiantes-service/estudiantes.service';
import { Estudiante } from '../models/estudiante.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-estudiantes',
  templateUrl: './listado-estudiantes.page.html',
  styleUrls: ['./listado-estudiantes.page.scss'],
})
export class ListadoEstudiantesPage implements OnInit {
  estudiantes:Estudiante[];
  constructor(private estudianteService: EstudiantesService, private router:Router) { }

  ngOnInit() {
    this.estudianteService.verEstudiantes().subscribe((_estudiantes)=>{
      this.estudiantes = _estudiantes;
      console.log(this.estudiantes);
    }, (error) => {
      console.error(error);
    });
  }

  verDetalle(estudiante:Estudiante){
    this.router.navigate(['estudiante-detalle', { estudianteD: JSON.stringify(estudiante) }]);
  }

  elimnarEst(estudianteID: number,indice:number){
    this.estudianteService.eliminarEstudiante(estudianteID).subscribe((_estudiante)=>{
    this.estudiantes.splice(indice,1);
    }, (error)=>{
      console.error(error);
    })
  }
  editarEstudiante(estudiante:Estudiante){
    this.router.navigate(['/agregar-estudiante',{estudianteEd: JSON.stringify(estudiante)}]);
  }
}
