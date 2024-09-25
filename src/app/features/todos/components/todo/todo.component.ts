import { Component } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: ITodo[] = [
      {
        id: 1,
        task: 'Todo 1',
        isDone: false,
      },
      {
        id: 2,
        task: 'Todo 2',
        isDone: false,
      },
      {
        id: 3,
        task: 'Todo 3',
        isDone: false,
      }
  ];

  onAdd(todo: ITodo) {
    let payload: ITodo = {... todo };
    todo.id = this.todos.length + 1;
    this.todos.push(payload);
  }
  remove(todos: ITodo[]) {
    this.todos = todos;
  }
}
