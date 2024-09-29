import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/i-customer';
import { environment } from '../../../environments/environment.development';
import { Pagination } from '../models/pagination';
import { IPagination } from '../interfaces/i-pagination';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  // private _customers: ICustomer[] = [];
  private _customers: IPagination<ICustomer[]> = new Pagination<ICustomer[]>();

  constructor(private http: HttpClient) {}

  public all(page: number = 1, query: string = '', pageSize: number = 5): Observable<IPagination<ICustomer[]>> {

    return this.http.get<IPagination<ICustomer[]>>(
      `${environment.BASE_URL_LOCAL}/customer?name=${query}&_page=${page}&_per_page=${pageSize}`
    );
  }

  // public search(field: string, query: string): Observable<ICustomer[]>{
  //   return this.http.get<ICustomer[]>(
  //     `${environment.BASE_URL_LOCAL}/customer?_limit=5&${field}=${query}`
  //   );
  // }


  get customers(): IPagination<ICustomer[]> {
    return this._customers;
  }

  set customers(data: IPagination<ICustomer[]>) {
    this._customers = data;
  }
}
