import { Component, Input } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { ReservasiService } from '../../../../cores/services/reservasi.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent {
  @Input() customer !: ICustomer;
  public clickedIndex: number | null = null; // Menyimpan indeks customer yang tombolnya diklik

  constructor(private reservasiService: ReservasiService) {}

  customerReservasi() {
    this.reservasiService.customer = this.customer;
  }

  isButtonVisible(index: number) {
    return this.clickedIndex !== index; // Menampilkan tombol jika bukan elemen yang diklik
  }
}
