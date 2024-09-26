import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  days = Array.from({ length: 5 }, (_, i) => i + 1);
  selectedDay: string | null = '/';

  constructor(private router: Router) {  }
  onDayChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      if(value == '/') {
        this.router.navigate(['/']);
      } else{
        this.router.navigate(['/day', value]);
      }
    }
  }
}
