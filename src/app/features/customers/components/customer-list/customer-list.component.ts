import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../../../cores/interfaces/i-customer';
import { CustomerService } from '../../../../cores/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent implements OnInit {

  // customers: ICustomer[] = [];
  loadingCustomerList: boolean = false;
  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.loadingCustomerList = true;

    setTimeout(() => {
      this.customerService.all().subscribe((responCustomer: ICustomer[]) => {
        // this.customers = responCustomer;
        // ganti dengan
        this.customerService.customers = responCustomer;
        this.loadingCustomerList = false;
      });
    }, 500);
  }

  get customers(): ICustomer[] {
    return this.customerService.customers;
  }
}
