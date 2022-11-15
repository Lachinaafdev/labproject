import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: NgToastService
  ) {
    if (this.authService.userData) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {}

  login(): void {
    const { email, password } = this.form.value;
    this.authService.login(email, password).subscribe(
      (response) => {
        const { data, message } = response;
        this.toastService.success({
          detail: message,
          summary: data.email,
          duration: 3000,
        });
        this.router.navigate(['/home']);
      },
      (errorResponse) => {
        const { error } = errorResponse;
        this.toastService.error({
          detail: '',
          summary: error.message,
          duration: 3000,
        });
      }
    );
  }

  getMessageErrorEmail(): string {
    const email = this.form.get('email');
    let errorMessage = '';
    if (email?.hasError('required'))
      return (errorMessage = 'El email es requerido');
    return errorMessage;
  }

  getMessageErrorPassword(): string {
    const email = this.form.get('password');
    let errorMessage = '';
    if (email?.hasError('required'))
      return (errorMessage = 'La contraseña es requerido');
    return errorMessage;
  }
}
