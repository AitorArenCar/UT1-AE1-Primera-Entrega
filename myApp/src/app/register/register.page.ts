import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  email: string = '';
  apiUrl = 'http://localhost:8080/api/users/register'; // Cambia la URL según tu backend

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  register() {
    const registerData = { username: this.username, password: this.password, email: this.email };

    this.http.post(this.apiUrl, registerData).subscribe(
      (response) => {
        console.log('Registro exitoso', response);
        // Redirigir al usuario a la página de login después del registro
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.error('Error en el registro', error);
        alert('Error al registrar usuario');
      }
    );
  }
}

