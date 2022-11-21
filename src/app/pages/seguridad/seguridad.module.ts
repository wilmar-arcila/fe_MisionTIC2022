import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ LoginComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class SeguridadModule { }
