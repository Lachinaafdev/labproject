import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearComponent } from '../../components/crear/crear.component';
import { EditarComponent } from '../../components/editar/editar.component';
import { EliminarComponent } from '../../components/eliminar/eliminar.component';
import { IRole } from '../../interfaces/IRole.interface';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-home-role',
  templateUrl: './home-role.component.html',
  styleUrls: ['./home-role.component.css'],
})
export class HomeRoleComponent implements OnInit {
  role!: IRole;
  displayedColumns: string[] = ['No', 'Rol', 'Acciones'];
  roles: any;

  constructor(private matDialog: MatDialog, private roleService: RoleService) {}

  ngOnInit(): void {
    this.roleService.ObtenerLista().subscribe((roles) => {
      this.roles = roles;
    });
  }
  public openDialogCrear(): void {
    this.matDialog.open(CrearComponent, {
      minWidth: '300px',
      hasBackdrop: true,
      autoFocus: false,
    });
  }

  public openDialogEditar(role: IRole): void {
    this.matDialog.open(EditarComponent, {
      data: { role },
      minWidth: '300px',
      hasBackdrop: true,
    });
  }

  public openDialogEliminar(roleId: string): void {
    this.matDialog.open(EliminarComponent, {
      data: { roleId },
      minWidth: '300px',
      hasBackdrop: true,
    });
  }
}
