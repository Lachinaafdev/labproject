import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IRole } from 'src/app/roles/interfaces/IRole.interface';
import { RoleService } from 'src/app/roles/services/role.service';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent implements OnInit {
  @ViewChild('errorSW') errorSW: any;

  public form: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    matricula: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
    ],
    rol: ['', Validators.required],
    genero: ['', Validators.required],
  });

  roles: IRole[] = [];
  constructor(
    private roleService: RoleService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.roleService.ObtenerLista().subscribe((roles) => {
      this.roles = roles;
    });
  }

  public crear(): void {
    const usuario = this.form.value;
    this.usuarioService.crear(usuario).subscribe(
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
            this.router.navigate(['/usuarios']);
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

  getMessageMatricula(): string {
    const matricula = this.form.get('matricula');
    let errorMessage = '';
    if (matricula?.hasError('required'))
      return (errorMessage = 'Matrícula requerida');

    if (!matricula?.hasError('minlength') || !matricula?.hasError('maxlength'))
      return (errorMessage =
        'La matrícula debe contener como mínimo 8 numeros');
    return errorMessage;
  }
}
