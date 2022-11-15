import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRole } from '../../interfaces/IRole.interface';
import { RoleService } from '../../services/role.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent {
  form: FormGroup = this.formBuilder.group({
    role: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private rolService: RoleService
  ) {}

  public crear(): void {
    const { role } = this.form.value;
    const role2: IRole = { name: role };
    this.rolService.Crear(role2).subscribe(
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
            window.location.reload();
          }
        });
      },
      (error: any) => {
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

  getMessageRole(): string {
    const role = this.form.get('role');
    let errorMessage = '';
    if (role?.hasError('required')) return (errorMessage = 'Campo requerido');
    return errorMessage;
  }
}
