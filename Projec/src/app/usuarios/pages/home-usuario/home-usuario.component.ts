import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../../components/editar/editar.component';
import { EliminarComponent } from '../../components/eliminar/eliminar.component';
import { IProfesor } from '../../interfaces/IProfesor.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css'],
})
export class HomeUsuarioComponent implements OnInit {
  profesores: any;
  displayedColumns: string[] = [
    'No',
    'Nombre',
    'Apellidos',
    'Matricula',
    'Rol',
    'Menu',
  ];

  constructor(
    private usuarioService: UsuarioService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.usuarioService.obtenerLista().subscribe((profesores) => {
      this.profesores = profesores;
    });
  }

  openDialogEditar(profesor: any): void {
    this.dialog.open(EditarComponent, {
      data: {
        profesor: profesor,
      },
      width: '400px',
    });
  }

  openDialogEliminar(profesorMatricula: string): void {
    this.dialog.open(EliminarComponent, {
      data: {
        profesorMatricula: profesorMatricula,
      },
      width: '400px',
    });
  }
}
