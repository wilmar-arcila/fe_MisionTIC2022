import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../modelos/usuario.model';


@Injectable({
  providedIn: 'root',
})

export class SeguridadService {
  elUsuario = new BehaviorSubject<Usuario>(new Usuario);
  constructor(private http: HttpClient, private router: Router) {
    this.verificarSesionActual();
  }

  public sayHello() {
    console.debug('>> Say hello to my little friend!');
  }

  /**
  * Permite obtener la información de usuario
  * que tiene la función activa y servirá
  * para acceder a la información del token
  */
  public get usuarioSesionActiva(): Usuario {
    console.debug('Seguridad->usuarioSesionActiva: ' + this.elUsuario.value);
    return this.elUsuario.value;
  }

  /**
  * Permite actualizar la información del usuario
  * que acabó de validarse correctamente
  * @param user información del usuario logueado
  */
  setUsuario(user: Usuario) {
    this.elUsuario.next(user);
  }

  /**
  * Permite obtener la información del usuario
  * con datos tales como el identificador y el token
  * @returns
  */
  getUsuario() {
    console.debug('Seguridad->getUsuario: ' + this.elUsuario.asObservable);
    return this.elUsuario.asObservable();
  }

  /**
  * Realiza la petición al backend con el correo y la contraseña
  * para verificar si existe o no en la plataforma
  * @param infoUsuario JSON con la información de correo y contraseña
  * @returns Respuesta HTTP la cual indica si el usuario tiene permiso de acceso
  */
  login(infoUsuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.url_gateway}/login`, infoUsuario);
  }

  /**
  * Guarda los datos tales como el identificador
  * y token del usuario en una base de datos
  * interna del navegador llamada local storage
  * @param datosSesion información del usuario
  * @returns un booleano que indica si la información
  * fue almacenada correctamente
  */
   guardarDatosSesion(datosSesion: any) {
    const sesionActual = localStorage.getItem('sesion');
    const data: Usuario = {
      _id: datosSesion.user_id,
      token: datosSesion.token,
    };
    localStorage.setItem('sesion', JSON.stringify(data));
    this.setUsuario(data);
  }

  /**
  * Permite cerrar la sesión del usuario
  * que estaba previamente logueado
  */
  logout() {
    localStorage.removeItem('sesion');
    this.setUsuario(new Usuario());
  }

  /**
  * Permite verificar si actualmente en el local storage
  * existe información de un usuario previamente logueado
  */
  verificarSesionActual() {
    console.debug('Seguridad->verificarSesionActual');
    const sesionActual = this.getDatosSesion();
    console.debug(sesionActual)
    if (sesionActual) {
      this.setUsuario(JSON.parse(sesionActual));
    }
  }

  /**
  * Verifica si hay una sesion activa
  * @returns
  */
  sesionExiste(): boolean {
    const sesionActual = this.getDatosSesion();
    return (sesionActual) ? true : false;
  }

  /**
  * Permite obtener los dato de la sesión activa en el
  * local storage
  * @returns
  */
  getDatosSesion() {
    const sesionActual = localStorage.getItem('sesion');
    return sesionActual;
  }
}
