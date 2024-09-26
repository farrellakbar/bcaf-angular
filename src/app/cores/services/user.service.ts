import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IUser } from '../interfaces/i-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public all(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.BASE_URL}/users`);
  }
}
