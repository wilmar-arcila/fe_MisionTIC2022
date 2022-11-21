import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import  Swal  from 'sweetalert2';

import { Usuario } from '../../../modelos/usuario.model';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email:string="";
  contrasena:string="";
  constructor(private miServicioSeguridad : SeguridadService, private router: Router) { }

  ngOnInit(): void {
    console.log("LOGIN inicializado")
  }

  login():void{
    console.log("aqui"+this.email+" contraseña "+this.contrasena)
  }
  test():void{
    console.log("TEST");
    this.miServicioSeguridad.sayHello();
  }

}
