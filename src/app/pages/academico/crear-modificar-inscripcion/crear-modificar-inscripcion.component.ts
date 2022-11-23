import { Component, OnInit } from '@angular/core';
import { Inscripcion } from '../../../modelos/inscripcion.model';

@Component({
  selector: 'ngx-crear-modificar-inscripcion',
  templateUrl: './crear-modificar-inscripcion.component.html',
  styleUrls: ['./crear-modificar-inscripcion.component.scss']
})
export class CrearModificarInscripcionComponent implements OnInit {
  modoCreacion: boolean = true;
  id_estudiante: string = "";
  intentoEnvio: boolean = false;
  inscripcion: Inscripcion = {
    año: "",
    semestre: "",
    estudiante: "",
    materia: "",
    nota_final: "",
    }

  constructor() { }

  ngOnInit(): void {
  }

}
