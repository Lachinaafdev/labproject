import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'roles',
        loadChildren: () =>
          import('../roles/roles.module').then((m) => m.RolesModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('../usuarios/usuarios.module').then((m) => m.UsuariosModule),
        canActivate: [AuthGuard],
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
