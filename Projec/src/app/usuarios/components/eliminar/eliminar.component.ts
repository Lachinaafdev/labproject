import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css'],
})
export class EliminarComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private usuarioService: UsuarioService
  ) {}

  eliminar(): void {
    const { profesorMatricula } = this.data;
    this.usuarioService.eliminar(profesorMatricula).subscribe(
      (response) => {
        Swal.fire({
          title: 'Éxito',
          icon: 'success',
          text: response.message,
          confirmButtonText: 'Aceptar',
          customClass: {
            confirmButton: 'btn btn-success',
          },
          buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });
      },
      (error) => {
        Swal.fire({
          title: 'Oh Oh!',
          icon: 'error',
          text: error.error.message,
          confirmButtonText: 'Aceptar',
          customClass: {
            confirmButton: 'btn btn-danger',
          },
          buttonsStyling: false,
        });
      }
    );
  }
}
