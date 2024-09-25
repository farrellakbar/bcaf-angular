import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent {
  isEdit: boolean = false;
  @Input() todo!: ITodo;
  @Output() eventEmitter: EventEmitter<number> = new EventEmitter();

  remove(){
    this.eventEmitter.emit(this.todo.id);
  }

  edit() {
    this.isEdit = !this.isEdit;
  }

  getClass(isDone: boolean) {
    if (isDone) {
      return 'text-primary';
    }

    return 'text-secondary';
  }
}
