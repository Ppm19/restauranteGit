import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'https://back-end-restaurante-git.vercel.app';

  constructor(private http: HttpClient) { }

  getEntrantes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/entrantes`);
  }
}
