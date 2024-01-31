import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

const bookUrl: string = 'api/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(bookUrl);
  }

  get(id: any): Observable<Book> {
    return this.http.get<Book>(`${bookUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(bookUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${bookUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${bookUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(bookUrl);
  }
}
