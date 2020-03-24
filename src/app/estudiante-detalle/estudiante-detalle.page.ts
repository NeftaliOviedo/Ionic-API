import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estudiante } from '../models/estudiante.model';

@Component({
  selector: 'app-estudiante-detalle',
  templateUrl: './estudiante-detalle.page.html',
  styleUrls: ['./estudiante-detalle.page.scss'],
})
export class EstudianteDetallePage implements OnInit {
  estudiante: Estudiante;
  constructor(private state:ActivatedRoute) { }

  ngOnInit() {
    this.estudiante = JSON.parse(this.state.snapshot.params.estudianteD);
  }

}
