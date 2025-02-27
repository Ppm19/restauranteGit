import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CabeceraUsuarioComponent } from '../cabecera-usuario/cabecera-usuario.component';
import { PedidoService } from '../pedido.service';
import { Entrantes } from './modelos/entrantes';
import { CommonModule } from '@angular/common';
import { Carnes } from './modelos/carnes';
import { Pasta } from './modelos/pasta';
import { Postres } from './modelos/postres';
import { Bebidas } from './modelos/bebidas';
import { Pedido } from './modelos/pedido';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CabeceraUsuarioComponent, CommonModule, MatIconModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
  providers: [PedidoService]
})
export class PedidosComponent implements OnInit {

  constructor(private router: Router, private pedidoService: PedidoService) {}

  pedidoNumero: number = 1;
  entrantes: Entrantes[] = [];
  carnes: Carnes[] = [];
  pastas: Pasta[] = [];
  postres: Postres[] = [];
  bebidas: Bebidas[] = [];
  platosCarta: any[] = [];

  pedido: Pedido = {
    nombre: `Pedido ${this.pedidoNumero}`,
    platos: [],
    precio: 0,
    estadoReserva: 'pendiente',
    direccion: '',
    telefono: ''
  };

  ngOnInit() {
    this.pedidoService.getEntrantes().subscribe(
      (data: Entrantes[]) => {
        this.entrantes = data;
        this.platosCarta = this.entrantes;
      },
      error => {
        console.error('Error al obtener los entrantes:', error);
      }
    );
    this.pedidoService.getCarnes().subscribe(
      (data: Carnes[]) => {
        this.carnes = data;
      },
      error => {
        console.error('Error al obtener las carnes:', error);
      }
    );
    this.pedidoService.getPastas().subscribe(
      (data: Pasta[]) => {
        this.pastas = data;
      },
      error => {
        console.error('Error al obtener las pastas:', error);
      }
    );
    this.pedidoService.getPostres().subscribe(
      (data: Postres[]) => {
        this.postres = data;
      },
      error => {
        console.error('Error al obtener los postres:', error);
      }
    );
    this.pedidoService.getBebidas().subscribe(
      (data: Bebidas[]) => {
        this.bebidas = data;
      },
      error => {
        console.error('Error al obtener las bebidas:', error);
      }
    );
    this.cambiarContenido('entrantes');
    this.obtenerNumeroPedido();
  }

  principal() {
    this.router.navigate(['/principal']);
  }

  obtenerNumeroPedido() {
    this.pedidoService.contarPedidos().subscribe((count: number) => {
      this.pedidoNumero = count;
    });
  }

  cambiarContenido(tipo: string) {
    switch (tipo) {
      case 'entrantes':
        this.platosCarta = this.entrantes;
        break;
      case 'pastas':
        this.platosCarta = this.pastas;
        break;
      case 'carnes':
        this.platosCarta = this.carnes;
        break;
      case 'postres':
        this.platosCarta = this.postres;
        break;
      case 'bebidas':
        this.platosCarta = this.bebidas;
        break;
      default:
        this.platosCarta = [];
        break;
    }
  }

  crearNuevoPedido() {
    this.pedidoNumero++;
    this.pedido = {
      nombre: `Pedido ${this.pedidoNumero}`,
      platos: [this.pedido.platos],
      precio: this.pedido.platos.length > 0 ? this.pedido.platos.reduce((total: number, plato: any) => total + plato.precio, 0) : 0,
      estadoReserva: 'pendiente',
      direccion: '',
      telefono: ''
    };
  }

  agregarPlatoAlPedido(plato: any) {
    this.pedido.platos.push(plato);
    this.pedido.precio = this.pedido.platos.reduce((total, p) => total + p.precio, 0);
    console.log(this.pedido);
  }

  eliminarPlato(plato: any) {
    this.pedido.platos = this.pedido.platos.filter(p => p !== plato);
    this.pedido.precio = this.pedido.platos.reduce((total, p) => total + p.precio, 0);
    console.log(this.pedido);
  }

  enviarPedido() {
    this.router.navigate(['/realizar-pedido'], { state: { pedido: this.pedido } });
  }
}
