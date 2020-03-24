import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../service/estudiantes-service/estudiantes.service';
import { Autor } from '../models/autor.model';
import { Estudiante } from '../models/estudiante.model';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.page.html',
  styleUrls: ['./agregar-estudiante.page.scss'],
})
export class AgregarEstudiantePage implements OnInit {
  autores: Autor[];
  estudiante:Estudiante = new Estudiante();
  editable:boolean = false;
  constructor(private estudianteService: EstudiantesService, public loadingController: LoadingController, 
    public toastController: ToastController, public state: ActivatedRoute) { }
   
  ngOnInit() {
    if (this.state.snapshot.params.estudianteEd != undefined){

      this.estudiante = new Estudiante(JSON.parse(this.state.snapshot.params.estudianteEd))
      this.editable = true;
    }
    this.estudianteService.verAutores().subscribe((autores)=>{
      this.autores = autores;
      console.log(autores);

    },(error)=>{
      console.error(error);
    })
  }
  async guardar(){
    const loading = await this.loadingController.create({
      message: 'Guardando...',
    });
    await loading.present();
    this.estudianteService.agregarEstudiante(this.estudiante).subscribe(()=>{
      this.estudiante = new Estudiante(null);
       loading.dismiss();
      this.mostrarMensaje("Estudiante Guardado");
    },error=>{
      console.error(error);
         loading.dismiss();
        this.mostrarMensaje("Ocurrio un Error");
    });
  }
  async mostrarMensaje(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();

  }
  async editar() {
    const loading = await this.loadingController.create({
      message: 'Editando estudiante...',
    });
    await loading.present();
    this.estudianteService.editarEstudiante(this.estudiante).subscribe(() => {
      loading.dismiss();
      this.mostrarMensaje("Estudiante Editado");
    }, error => {
      console.error(error);
      loading.dismiss();
      this.mostrarMensaje("Ocurrio un Error");
    });
  }
}
