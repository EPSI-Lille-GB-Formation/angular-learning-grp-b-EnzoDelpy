import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, of, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'api/todos';

  constructor(private http: HttpClient) {}

  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl).pipe(
      tap((todoList) => console.log(todoList)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.todosUrl}/${id}`).pipe(
      catchError((error) => {
        console.log(error);
        return of();
      })
    );
  }

  deleteTodoById(id: number): void {
    this.http.delete(`${this.todosUrl}/${id}`).pipe(
      catchError((error) => {
        console.log(error);
        return of();
      })
    )
  }

}
