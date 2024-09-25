import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';
import { BerkasComponent } from './berkas/berkas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Day3Component } from './day3/day3.component';
import { TodoComponent } from './features/todos/components/todo/todo.component';
import { TodoFormComponent } from './features/todos/components/todo-form/todo-form.component';
import { TodoListComponent } from './features/todos/components/todo-list/todo-list.component';
import { TodoDetailComponent } from './features/todos/components/todo-detail/todo-detail.component';
import { TodoTotalComponent } from './features/todos/components/todo-total/todo-total.component';
import { AttrDirective } from './attr.directive';

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day2Component,
    BerkasComponent,
    Day3Component,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoTotalComponent,
    AttrDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent, Day2Component,Day3Component, BerkasComponent]
})
export class AppModule { }
