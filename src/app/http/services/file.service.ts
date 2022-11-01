import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private readonly http: HttpClient) { }

  getFiles(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.domain}file`);
  }
}
