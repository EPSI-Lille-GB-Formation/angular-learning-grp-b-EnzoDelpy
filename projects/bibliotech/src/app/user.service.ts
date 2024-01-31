import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

const userUrl: string = 'api/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(userUrl);
  }

  get(id: any): Observable<User> {
    return this.http.get<User>(`${userUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(userUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${userUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${userUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(userUrl);
  }
}
