import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  apiUrl = 'http://localhost:8080/api/users/login';

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.storage.create();
  }

  login() {
    const loginData = { username: this.username, password: this.password };

    this.http.post(this.apiUrl, loginData).subscribe(
      async (response: any) => {
        await this.storage.set('token', response.token);
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.error('Error de inicio de sesión', error);
        alert('Credenciales incorrectas');
      }
    );
  }
}
