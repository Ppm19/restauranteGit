import { Component } from '@angular/core';
import { CabeceraUsuarioComponent } from '../cabecera-usuario/cabecera-usuario.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Reserva {
  nombre: string;
  fecha: string;
  hora: string;
  ncomensales: number;
}

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CabeceraUsuarioComponent,CommonModule, FormsModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {
  reserva: Reserva = {
    nombre: '',
    fecha: '',
    hora: '',
    ncomensales: 1
  };

  constructor(private http: HttpClient) {}

  crearReserva() {
    this.http.post('https://back-end-restaurante-git.vercel.app/crear-reserva', this.reserva)
      .subscribe({
        next: (response) => {
          alert('Reserva creada con éxito');
          this.reserva = {
            nombre: '',
            fecha: '',
            hora: '',
            ncomensales: 1
          };
        },
        error: (error) => {
          alert('Error al crear la reserva');
          console.error('Error:', error);
        }
      });
  }
}
