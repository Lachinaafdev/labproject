import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoleComponent } from './pages/home-role/home-role.component';

const routes: Routes = [
  { path: '', component: HomeRoleComponent },
  { path: '**', component: HomeRoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule {}
