import { Component, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  @Output() evenEmitter: EventEmitter<ITodo> = new EventEmitter();
  todo: ITodo = {
    id: 0,
    task: '',
    isDone: false
  }


  add(){
    this.evenEmitter.emit(this.todo);
  }
}
