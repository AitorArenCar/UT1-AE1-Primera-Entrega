import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.page.html',
  styleUrls: ['./books-form.page.scss'],
})
export class BooksFormPage implements OnInit {

  bookForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private bookService: BookService,
    private photoService:PhotoService,
    private route: Router) {
    this.bookForm = this.formBuilder.group({
      title:['', Validators.compose([Validators.required])],
      author: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {}

  async createBook(){
    //if (this.bookForm.valid){
      //console.log('Formulario válido:', this.bookForm.value);
      //this.bookService.create(this.bookForm.value).subscribe(response => {
        //this.route.navigateByUrl("/my-books");
      //})
    //}else{
      //console.log('Formulario no válido!');
    //}

    this.isSubmitted = true;
    if (!this.bookForm.valid) {
      console.log('Please provide all the required values!')
      return;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.bookService.create(this.bookForm.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.route.navigateByUrl("/my-books");
      })
    }
  }

  takePhoto(){
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath? data.webPath : "";
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = "";
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
