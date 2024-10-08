import { Component, Input } from '@angular/core';
import { ITodo } from '../../interfaces/i-todo';
import { TodoService } from '../../../../cores/services/todo.service';

let MOCK_DATA = [
  {
    id: 1,
    task: 'Minum Kopi',
    isDone: false,
  },
  {
    id: 2,
    task: 'Meeting',
    isDone: false,
  },
  {
    id: 3,
    task: 'Makan Siang',
    isDone: false,
  },
];

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  isEdit: boolean = false;

  @Input() title: string = 'App Todo';
  @Input() forTrash: boolean = false;

  todos: ITodo[] = MOCK_DATA;

  constructor(private todoService: TodoService) {}

  getAll() {
    return this.todoService.getTodos();
  }

  add(todo: ITodo) {
    let payload: ITodo = { ...todo };
    payload.id = this.todos.length + 1;
    this.todos.push(payload);
  }
  search(query: string) {
    let todosCopy: ITodo[] = [...this.todos];
    let results = todosCopy.filter((value: ITodo) =>
      value.task.includes(query)
    );
    // let results = MOCK_DATA.filter((value: ITodo) =>
    //   value.task.toLowerCase().includes(query.toLowerCase())
    // );
    // console.log(results.length);

    if (results.length >= 0) {
      this.todos = results;
    }

    if (query === '') {
      this.todos = MOCK_DATA;
    }
  }
  remove(todos: ITodo[]) {
    this.todos = todos;
  }
}
