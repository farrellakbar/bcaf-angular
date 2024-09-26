import { Component } from '@angular/core';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrl: './day4.component.css'
})
export class Day4Component {
  angka: number = 90;
  persen: number = 0.321;
  desimal: number = 3457.17782;
  harga: number = 120_000;
  teks: string = 'Halo Angular';

  tanggal: Date = new Date();
  timestamp: number = Date.now();
  tanggalStr: string = 'Fri Sept 20 2024 08:00:00';

}
