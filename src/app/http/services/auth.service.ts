import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(`${environment.domain}auth/login`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${environment.domain}user/register`, data);
  }
}
