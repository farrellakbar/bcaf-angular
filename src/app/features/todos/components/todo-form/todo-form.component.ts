import { Component, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  icons = {
    add: faPlusCircle,
  };

  @Output() eventEmitter: EventEmitter<ITodo> = new EventEmitter();
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  todo: ITodo = {
    id: 0,
    task: '',
    isDone: false
  }


  add(){
    this.eventEmitter.emit(this.todo);
  }

  search() {
    console.log(this.todo.task);

    this.onSearch.emit(this.todo.task);
  }
}
