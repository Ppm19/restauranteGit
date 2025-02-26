import { Component } from '@angular/core';
import { CabeceraUsuarioComponent } from '../cabecera-usuario/cabecera-usuario.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Reserva } from '../reservas/modelo/reserva'
import { ReservasService } from '../reservas.service';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CabeceraUsuarioComponent, FormsModule,CommonModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css',
  providers: [ReservasService]
})

export class ReservasComponent {

  reserva: Reserva = {
    nombre: '',
    fecha: '',
    hora: '',
    ncomensales: 1
  };

  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private http: HttpClient, private reservaService: ReservasService) {}

  crearReserva() {
    this.reservaService.crearReserva(this.reserva).subscribe({
      next: (response) => {
        this.reserva = {
          nombre: '',
          fecha: '',
          hora: '',
          ncomensales: 1
        };
        this.mensajeExito = '¡Reserva creada exitosamente!';
        this.mensajeError = '';
        
        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000);
      },
      error: (error) => {
        this.mensajeError = 'Error al crear la reserva';
        this.mensajeExito = '';
        
        setTimeout(() => {
          this.mensajeError = '';
        }, 3000);
      }
    });
  }
  
  validarFormulario(event: Event) {
    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      this.mensajeError = 'Por favor, complete todos los campos requeridos';
      
      setTimeout(() => {
        this.mensajeError = '';
      }, 3000);
      
      return;
    }
    
    this.crearReserva();
  }
}
