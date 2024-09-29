import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReservasi } from '../interfaces/i-reservasi';
import { Reservasi } from '../models/reservasi';
import { ICustomer } from '../interfaces/i-customer';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IPagination } from '../interfaces/i-pagination';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root',
})
export class ReservasiService {
  private _reservasi: IReservasi = new Reservasi();
  // private _reservations: IReservasi[] = [];
  // ADA PERUBAHAN UNTUK PAGINATION
  // private _reservations!: IPagination<IReservasi[]>;
  private _reservations: IPagination<IReservasi[]> = new Pagination<IReservasi[]>();

  constructor(private http: HttpClient) {}

  //OPEN RESERVASI
    //GET
    get reservasi(): IReservasi {
      return this._reservasi;
    }
    //SET
    set reservasi(data: IReservasi) {
      this._reservasi = data;
    }
  //CLOSE RESERVASI

  //OPEN RESERVASI
    //GET
    get reservations(): IPagination<IReservasi[]> {
      return this._reservations;
    }
    //SET
    set reservations(data: IPagination<IReservasi[]>) {
      this._reservations = data;
    }
  //CLOSE RESERVASI


  set customer(data: ICustomer) {
    this._reservasi.customer = data;
  }

  public all(page: number = 1, query: string = ''): Observable<IPagination<IReservasi[]>> {
    return this.http.get<IPagination<IReservasi[]>>(
      `${environment.BASE_URL_LOCAL}/reservasi?customer.name=${query}&_page=${page}&_per_page=5`
    );
  }

  create(time: {
    hour: string | number;
    minute: string | number;
  }): Observable<IReservasi> {
    let { id, ...payload } = { ...this._reservasi };

    console.log(
      'UYEE',
      payload.jadwal.toString() + ` ${time.hour}:${time.minute}`
    );

    payload.jadwal = Date.parse(
      payload.jadwal.toString() + ` ${time.hour}:${time.minute}`
    );

    let body: string = JSON.stringify(payload);

    return this.http.post<IReservasi>(
      `${environment.BASE_URL_LOCAL}/reservasi`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
