import { Autor } from './autor.model';

export interface Estudiante{
    estudianteID: number,
    nombre: string,
    apellido: string,
    edad: number,
    escuela: string,
    carrera: string,
    autorID: number,
    autor: Autor

}
export class Estudiante{
    estudianteID: number;
    nombre: string;
    apellido: string;
    edad: number;
    escuela: string;
    carrera: string;
    autorID: number;
    autor: Autor;
    constructor(datos?: Estudiante){
        if(datos != null){
            this.estudianteID = datos.estudianteID;
            this.nombre = datos.nombre;
            this.apellido = datos.apellido;
            this.edad = datos.edad;
            this.escuela = datos.escuela;
            this.carrera = datos.carrera;
            this.autorID = datos.autorID;
            this.autor = datos.autor;
            return;
        }else{

            this.estudianteID = this.estudianteID;
            this.nombre = this.nombre;
            this.apellido = this.apellido;
            this.edad = this.edad;
            this.escuela = this.escuela;
            this.carrera = this.carrera;
            this.autorID = this.autorID;
            this.autor = this.autor;
        }
        }
}