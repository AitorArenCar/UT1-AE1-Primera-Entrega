import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.page.html',
  styleUrls: ['./books-form.page.scss'],
})
export class BooksFormPage implements OnInit {

  bookForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    private bookService: BookService,
    private route: Router) {
    this.bookForm = this.formBuilder.group({
      title:['', Validators.compose([Validators.required])],
      author: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {}

  createBook(){
    if (this.bookForm.valid){
      console.log('Formulario válido:', this.bookForm.value);
      this.bookService.create(this.bookForm.value).subscribe(response => {
        this.route.navigateByUrl("/my-books");
      })
    }else{
      console.log('Formulario no válido!');
    }
  }

  getFormControl(field: string){
    return this.bookForm.get(field);
  }

  gotoMyBooks(){
    this.route.navigateByUrl("/my-books")
  }

  gotoHome(){
    this.route.navigateByUrl("/")
  }

}
