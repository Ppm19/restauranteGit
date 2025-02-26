import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from './reservas/modelo/reserva';

@Injectable({
  providedIn: 'root'
})

export class ReservasService {

private url = 'https://back-end-restaurante-git.vercel.app';

  constructor(private http: HttpClient) { }

  crearReserva(reserva: Reserva) {
    return this.http.post(`${this.url}/crear-reserva`, reserva);
  }
}
