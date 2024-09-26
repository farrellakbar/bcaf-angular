import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';

const routes: Routes = [
  {path: 'day/1', component: Day1Component},
  {path: 'day/2', component: Day2Component},
  {path: 'day/3', component: Day3Component},
  {path: 'day/4', component: Day4Component},
  {path: 'day/5', component: Day5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
