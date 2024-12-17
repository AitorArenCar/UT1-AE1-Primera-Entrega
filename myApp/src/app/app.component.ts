import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.storage.create();
    this.platform.ready().then(() => {
      this.storage.get('token').then((token) => {
        if (token) {
        } else {
          this.router.navigateByUrl('/login'); // Redirigir al login si no hay token
        }
      });
    });
  }
}
