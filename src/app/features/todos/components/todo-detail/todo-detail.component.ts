import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';
import {
  faExclamationCircle,
  faPencil,
  faClose,
  faTrash,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent {
  icons = {
    confirm: faExclamationCircle,
    edit: faPencil,
    remove: faTrash,
    checklist: faCheckCircle,
    cancel: faClose,
  };

  isEdit: boolean = false;
  isConfirmRemove: boolean = false;
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
      return 'text-decoration-line-through';
    }

    return '';
  }
}
