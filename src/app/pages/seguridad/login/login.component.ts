import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import  Swal  from 'sweetalert2';

import { Usuario } from '../../../modelos/usuario.model';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  email: string = '';
  contrasena: string = '';
  constructor(private miServicioSeguridad: SeguridadService, private router: Router) { }

  ngOnInit(): void {
    console.debug('LOGIN inicializado');
  }

  login(): void {
    console.debug('aqui' + this.email + ' contraseña ' + this.contrasena);
  }
  test(): void {
    console.debug('TEST');
    this.miServicioSeguridad.sayHello();
  }

}
