import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = "BH";
  author: string = "star";

  constructor(private router: Router) {}

  gotoMyBooks(){
    this.router.navigateByUrl("/my-books")
  }

  gotoBooksForm(){
    this.router.navigateByUrl("/books-form")
  }

}
