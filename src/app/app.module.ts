import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';
import { BerkasComponent } from './berkas/berkas.component';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Day3Component } from './day3/day3.component';
import { TodoComponent } from './features/todos/components/todo/todo.component';
import { TodoFormComponent } from './features/todos/components/todo-form/todo-form.component';
import { TodoListComponent } from './features/todos/components/todo-list/todo-list.component';
import { TodoDetailComponent } from './features/todos/components/todo-detail/todo-detail.component';
import { TodoTotalComponent } from './features/todos/components/todo-total/todo-total.component';
import { AttrDirective } from './attr.directive';
import { Day4Component } from './day4/day4.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoService } from './cores/services/todo.service';
import { IndodatePipe } from './indodate.pipe';
import { Day5Component } from './day5/day5.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { UserService } from './cores/services/user.service';
import { CustomerChoiceComponent } from './features/customers/components/customer-choice/customer-choice.component';
import { CustomerDetailComponent } from './features/customers/components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './features/customers/components/customer-list/customer-list.component';
import { CustomerSearchComponent } from './features/customers/components/customer-search/customer-search.component';
import { ReservasiCreateComponent } from './features/reservasis/components/reservasi-create/reservasi-create.component';
import { Day6Component } from './day6/day6.component';
import { ReservasiChoiceComponent } from './features/reservasi/components/reservasi-choice/reservasi-choice.component';
import { ReservasiDetailComponent } from './features/reservasi/components/reservasi-detail/reservasi-detail.component';
import { ReservasiListComponent } from './features/reservasi/components/reservasi-list/reservasi-list.component';
import { ReservasiSearchComponent } from './features/reservasi/components/reservasi-search/reservasi-search.component';
import { ReservasiSisaComponent } from './features/reservasi/components/reservasi-sisa/reservasi-sisa.component';
import { CustomerStatusDirective } from './features/customers/directives/customer-status.directive';

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
    AttrDirective,
    Day4Component,
    IndodatePipe,
    Day5Component,
    CustomerChoiceComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerSearchComponent,
    ReservasiCreateComponent,
    Day6Component,
    ReservasiChoiceComponent,
    ReservasiDetailComponent,
    ReservasiListComponent,
    ReservasiSearchComponent,
    ReservasiSisaComponent,
    CustomerStatusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    NgbTimepickerModule,
  ],
  providers: [
    provideHttpClient(),
    TodoService,
    // { provide: LOCALE_ID, useValue: 'id-ID' },
    UserService,
  ],
  bootstrap: [AppComponent, Day2Component,Day3Component, BerkasComponent]
})
export class AppModule { }
