import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IRole } from 'src/app/roles/interfaces/IRole.interface';
import { IProfesor } from '../../interfaces/IProfesor.interface';
import { UsuarioService } from '../../services/usuario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  form!: FormGroup;

  profesor!: IProfesor;
  roles: IRole[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.profesor = data.profesor;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [this.profesor.nombre, Validators.required],
      apellidos: [this.profesor.apellidos, Validators.required],
    });
  }

  editarProfesor(): void {
    const { nombre, apellidos } = this.form.value;
    let profesorModel: IProfesor = {
      nombre: nombre,
      apellidos: apellidos,
      matricula: this.profesor.matricula,
    };
    this.usuarioService.editar(profesorModel).subscribe((response) => {
      Swal.fire({
        title: 'Éxito',
        icon: 'success',
        text: response.message,
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'btn btn-success',
        },
        buttonsStyling: false,
      }).then(
        (result) => {
          if (result.isConfirmed) {
            location.reload();
          }
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
    });
  }
}
