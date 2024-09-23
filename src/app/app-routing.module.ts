import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';

const routes: Routes = [
  {path: 'day/1', component: Day1Component},
  {path: 'day/2', component: Day2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
