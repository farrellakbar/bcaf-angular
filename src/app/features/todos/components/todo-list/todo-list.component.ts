import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos: ITodo[] = [];
  @Output() eventEmitter: EventEmitter<ITodo[]> = new EventEmitter();
  remove(id: number) {
    let payload: ITodo[] = this.todos.filter((value: ITodo) => value.id !== id);
    this.eventEmitter.emit(payload);
  }
}
