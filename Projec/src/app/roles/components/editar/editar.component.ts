import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IRole } from '../../interfaces/IRole.interface';
import { RoleService } from '../../services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent {
  role!: IRole;
  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private roleService: RoleService
  ) {
    this.role = this.data.role;
    this.form = this.formBuilder.group({
      name: [this.role.name, Validators.required],
    });
  }

  editar(): void {
    const { name } = this.form.value;
    const role: IRole = { id: this.role.id, name: name };
    this.roleService.Editar(role).subscribe(
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
        console.log(error);
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
    const role = this.form.get('name');
    let errorMessage = '';
    if (role?.hasError('required')) return (errorMessage = 'Campo requerido');
    return errorMessage;
  }
}
