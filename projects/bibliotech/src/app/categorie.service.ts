import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from './categorie';

const categorieUrl: string = 'api/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(categorieUrl);
  }

  get(id: any): Observable<Categorie> {
    return this.http.get<Categorie>(`${categorieUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(categorieUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${categorieUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${categorieUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(categorieUrl);
  }
}
