import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HomeUsuarioComponent } from './pages/home-usuario/home-usuario.component';
import { CrearComponent } from './pages/crear/crear.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedModule } from '../shared/shared.module';
import { EditarComponent } from './components/editar/editar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';

@NgModule({
  declarations: [
    HomeUsuarioComponent,
    CrearComponent,
    EditarComponent,
    EliminarComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class UsuariosModule {}
