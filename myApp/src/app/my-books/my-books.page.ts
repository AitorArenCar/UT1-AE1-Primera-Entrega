import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.page.html',
  styleUrls: ['./my-books.page.scss'],
})
export class MyBooksPage implements OnInit {

  books: any = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.getAllBooks();
  }

  ionViewWillEnter() {
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getBooks().subscribe(response => {
      this.books = response;
    })
  }

  deleteBook(id:any){
    this.bookService.delete(id).subscribe(response => {
      this.getAllBooks();
    })
  }

  gotoHome(){
    this.router.navigateByUrl("/")
  }

  gotoBooksForm(){
    this.router.navigateByUrl("/books-form")
  }
}
