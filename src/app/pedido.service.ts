import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from './pedidos/modelos/pedido';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'https://back-end-restaurante-git.vercel.app';

  constructor(private http: HttpClient) { }

  getEntrantes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/entrantes`);
  }

  getCarnes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/carnes`);
  }

  getPastas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pasta`);
  }

  getPostres(): Observable<any> {
    return this.http.get(`${this.apiUrl}/postres`);
  }

  getBebidas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/bebidas`);
  }

  realizarPedido(pedido: Pedido): Observable<any> {
    return this.http.post(`${this.apiUrl}/realizar-pedido`, pedido);
  }

  contarPedidos(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/pedidos`);
  }
}
