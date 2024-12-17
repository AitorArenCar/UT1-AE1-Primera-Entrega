import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  endpoint = 'http://localhost:8080/api/books'

  constructor(private httpClient: HttpClient) { }

  getBooks(){
    return this.httpClient.get(this.endpoint);
  }

  create(book:any, blob: any){
    let formData = new FormData();

    formData.append("title", book.title);
    formData.append("author", book.author);
    formData.append("description", book.description);
    formData.append('file', blob);

    return this.httpClient.post(this.endpoint, formData);
  }


  delete(id:any){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

}
