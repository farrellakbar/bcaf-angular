import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReservasi } from '../interfaces/i-reservasi';
import { Reservasi } from '../models/reservasi';
import { ICustomer } from '../interfaces/i-customer';
import { catchError, Observable, of } from 'rxjs';
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

  //OPEN RESERVASI (table list with pagination)
    //GET
    get reservations(): IPagination<IReservasi[]> {
      return this._reservations;
    }
    //SET
    set reservations(data: IPagination<IReservasi[]>) {
      this._reservations = data;
    }
  //CLOSE RESERVASI (table list with pagination)


  set customer(data: ICustomer) {
    this._reservasi.customer = data;
  }

  //BEFORE PAGINATION
  // public all(): Observable<IReservasi[]> {
  //   return this.http.get<IReservasi[]>(
  //     `${environment.BASE_URL_LOCAL}/reservasi`
  //   );
  // }
  //AFTER PAGINATION
  public all(page: number = 1, query: string = '', pageSize: number = 5): Observable<IPagination<IReservasi[]>> {
    const searchQuery = encodeURIComponent(query);  // menghindari karakter-karakter khusus

    return this.http.get<IPagination<IReservasi[]>>(
      `${environment.BASE_URL_LOCAL}/reservasi?customer.name=${searchQuery}&_page=${page}&_per_page=${pageSize}`
    ).pipe(
      catchError(error => {
        console.error('Error fetching data', error);
        return of({ first: 1, prev: 0, next: 0, last: 0, pages: 0, items: 0, data: [] });
      })
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

  remove(id: number | string) {
    return this.http.delete<IReservasi>(
      `${environment.BASE_URL_LOCAL}/reservasi/${id}/`
    );
  }
}
