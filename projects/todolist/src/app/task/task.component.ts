import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  template: `
    <h1>Task</h1>
  `,
  styles: []
})
export class TaskComponent {
  task: Todo|undefined;

  constructor(private todoService: TodoService) {}

  ngOnInit(){
    this.todoService.getTodoById(1).subscribe(task => this.task = task);
  }

}
