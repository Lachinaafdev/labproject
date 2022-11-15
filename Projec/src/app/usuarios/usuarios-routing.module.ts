import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './pages/crear/crear.component';
import { HomeUsuarioComponent } from './pages/home-usuario/home-usuario.component';

const routes: Routes = [
  { path: '', component: HomeUsuarioComponent },
  { path: 'crear', component: CrearComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
