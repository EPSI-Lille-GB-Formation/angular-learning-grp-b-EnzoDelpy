import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from '../mock-todo';
import { HoverBorderDirective } from '../hover-border.directive';
import { TodoComponent } from '../todo/todo.component';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TodoComponent,HoverBorderDirective],
  template : `
  <main class="container">
  <h1>Liste des choses à faire</h1>
  <h3>Voici la liste de toute les tâches :     
    <span [ngSwitch]="showIsCompleted">
        <div *ngSwitchCase="true">Terminé</div>
        <div *ngSwitchCase="false">À faire</div>
        <div *ngSwitchCase="undefined">Toutes</div>
    </span>
</h3>
  <a href="#" [class.secondary]="!showIsCompleted && showIsCompleted != undefined" (click)="changeTodolist(false)" role="button">A faire</a>
  <a href="#" [class.secondary]="showIsCompleted && showIsCompleted != undefined" (click)="changeTodolist(true)" role="button">Terminé</a>
  <ng-container *ngFor="let t of this.todolist">
    <app-todo *ngIf="showIsCompleted == undefined || showIsCompleted==t.isCompleted" [value]="t"/>
  </ng-container>
  </main>
  
  `,
  styles : [
    `
    a {
      margin-left:10px
    }
    `
  ]

})
export class TodoListComponent {

  todolist: Todo[] = [];

  showIsCompleted: boolean | undefined = undefined;

  constructor(private todoService: TodoService){
    console.table(this.todolist);
  }

  ngOnInit(): void{
    this.todoService.getTodoList().subscribe(todos => this.todolist = todos);
    this.todoService.getTodoById(1).subscribe(todo => console.log(todo));
  }

  changeTodolist(bool:boolean): void{
    if(this.showIsCompleted!=bool){
      this.showIsCompleted = bool;
      console.log("Affichage de la liste à l'état isCompleted = " + this.showIsCompleted)
    }else{
      console.log("Affichage de toute la liste")
      this.showIsCompleted=undefined;
    }
    console.log(this.showIsCompleted)
  }
  
}
