import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { CustomerService } from '../../../../cores/services/customer.service';
import { IPagination } from '../../../../cores/interfaces/i-pagination';
import { ReservasiService } from '../../../../cores/services/reservasi.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent implements OnInit {

  // customers: ICustomer[] = [];
  loadingCustomerList: boolean = false;
  page: number = 1;
  query: string = '';

  constructor(private customerService: CustomerService, private reservasiService: ReservasiService) {

  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loadingCustomerList = true;
    this.customerService.all(this.page, this.query).subscribe((res: IPagination<ICustomer[]>) => {
      this.customerService.customers = res;
      this.loadingCustomerList = false;
    });
  }

  onPaginate(page: number) {
    this.page = page;
    this.loadCustomers();
  }

  onSearch() {
    this.page = 1;
    this.loadCustomers();
  }

  get customers(): IPagination<ICustomer[]> {
    return this.customerService.customers;
  }

  customerReservasi(customer: ICustomer) {
    this.reservasiService.customer = customer;
    console.log(customer);

  }
}
