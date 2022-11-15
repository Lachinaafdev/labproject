import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { HomeRoleComponent } from './pages/home-role/home-role.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { EditarComponent } from './components/editar/editar.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './components/crear/crear.component';

@NgModule({
  declarations: [HomeRoleComponent, EditarComponent, EliminarComponent, CrearComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class RolesModule {}
