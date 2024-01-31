import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from './page';

const pageUrl: string = 'api/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Page[]> {
    return this.http.get<Page[]>(pageUrl);
  }

  get(id: any): Observable<Page> {
    return this.http.get<Page>(`${pageUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(pageUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${pageUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${pageUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(pageUrl);
  }
}
