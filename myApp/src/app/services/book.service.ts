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

  create(book:any){
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("title", book.title);
    body.append("author", book.author);
    body.append("description", book.description);

    return this.httpClient.post(this.endpoint, body.toString(), {headers});
  }


  delete(id:any){
    return this.httpClient.delete(`${this.endpoint}/${id}`);
  }

}
