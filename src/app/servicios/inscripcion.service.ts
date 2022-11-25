import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Inscripcion } from '../modelos/inscripcion.model';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {

  constructor(private http: HttpClient) {
    console.debug('Constructor Servicio Inscripción');
  }

  listar(): Observable<Inscripcion[]> {
    const url = `${environment.url_gateway}/inscripciones`;
    console.debug('Listar Inscripciones: ' + url);
    return this.http.get<Inscripcion[]>(url);
  }

  getInscripcion(id: string): Observable<Inscripcion> {
    const url = `${environment.url_gateway}/inscripciones/${id}`;
    console.debug('Listar Inscripcion: ' + url);
    return this.http.get<Inscripcion>(url);
  }

  crear(inscripcion: Inscripcion) {
    const url = `${environment.url_gateway}/inscripciones`;
    console.debug('Crear Inscripcion: ' + url + inscripcion);
    return this.http.post(url, inscripcion);
  }

  editar(id: string, nota: Object) {
    const url = `${environment.url_gateway}/inscripciones/${id}`;
    console.debug('Editar Inscripcion: ' + url + nota);
    return this.http.patch(url, nota);
  }

  eliminar(id: string) {
    const url = `${environment.url_gateway}/inscripciones/${id}`;
    console.debug('Eliminar Inscripciones: ' + url);
    return this.http.delete<Inscripcion>(url);
  }
}
