import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../../models/estudiante.model';
import { Autor } from '../../models/autor.model';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(public http: HttpClient) { }

  verEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>('http://nefov2000-001-site1.gtempurl.com/api/estudiante/obtener');
  }
  eliminarEstudiante( estudianteID: number):Observable<boolean>{
    return this.http.delete<boolean>('http://nefov2000-001-site1.gtempurl.com/api/estudiante/borrar/'+ estudianteID);
  }
  verAutores(): Observable<Autor[]> {
    return this.http.get<Estudiante[]>('http://nefov2000-001-site1.gtempurl.com/api/estudiante/listadoAutores');
  }
  agregarEstudiante(estudiante: Estudiante): Observable<boolean>{
    return this.http.post<boolean>('http://nefov2000-001-site1.gtempurl.com/api/estudiante/agregar', estudiante);
  }
   editarEstudiante(estudiante: Estudiante): Observable<boolean>{
    return this.http.put<boolean>('http://nefov2000-001-site1.gtempurl.com/api/estudiante/editar', estudiante);
  }
}
