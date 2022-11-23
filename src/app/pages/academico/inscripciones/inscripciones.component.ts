import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Inscripcion } from '../../../modelos/inscripcion.model';
import { InscripcionService } from '../../../servicios/inscripcion.service';

@Component({
  selector: 'ngx-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss'],
})
export class InscripcionesComponent implements OnInit {
  inscripciones: Inscripcion[];
  nombresColumnas: string[] = ['Año', 'Semestre', 'Estudiante', 'Materia', 'Nota final', 'Opciones'];
  a$os: string[] = [];

  constructor(private miServicioInscripcion: InscripcionService, private router: Router) { }

  ngOnInit(): void {
    console.debug('INSCRIPCIONES');
    this.listar();
  }

  listar(): void {
    console.debug('>>inscripciones->listar');
    this.miServicioInscripcion.listar().subscribe(
          data => {
                  this.inscripciones = data;
                  console.debug(this.inscripciones);
                  this.inscripciones.forEach(element => this.a$os.push(element.año));
                  console.debug(this.a$os);
                  },
    );
  }

  agregar(): void {
    console.debug('>>inscripciones->agregar');
    this.router.navigate(['pages/academico/inscripciones/crear']);
  }

  editar(id: string): void {
    console.debug('>>inscripciones->editar ' + id);
    this.router.navigate(['pages/academico/inscripciones/actualizar/'+id]);
  }

  eliminar(id: string): void {
    console.debug('>>inscripciones->eliminar');
    Swal.fire({
                title: 'Eliminar Inscripción',
                text: '¿Está seguro que quiere eliminar la inscripción?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar',
      }).then(
        (result) => {
                      if (result.isConfirmed) {
                        // this.miServicioInscripcion.eliminar(id).subscribe(
                        //   data => {
                                    Swal.fire(
                                              'Eliminado!',
                                              'La inscripción ha sido eliminada correctamente',
                                              'success',
                                    );
                                    this.ngOnInit();
                          // }
                        // );
                      }
                    },
      );
  }

}
