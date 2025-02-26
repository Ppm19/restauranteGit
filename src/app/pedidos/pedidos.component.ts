import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CabeceraUsuarioComponent } from '../cabecera-usuario/cabecera-usuario.component';
import { PedidoService } from '../pedido.service';
import { Entrantes } from './modelos/entrantes';
import { CommonModule } from '@angular/common';
import { Carnes } from './modelos/carnes';
import { Pasta } from './modelos/pasta';
import { Postres } from './modelos/postres';
import { Bebidas } from './modelos/bebidas';


@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CabeceraUsuarioComponent, CommonModule],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  constructor(private router: Router, private pedidoService: PedidoService) {}

  entrantes: Entrantes[] = [];
  carnes: Carnes[] = [];
  pastas: Pasta[] = [];
  postres: Postres[] = [];
  bebidas: Bebidas[] = [];
  platos: any[] = [];

  ngOnInit() {
    this.pedidoService.getEntrantes().subscribe(
      (data: Entrantes[]) => {
        this.entrantes = data;
        this.platos = this.entrantes;
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
  }

  principal() {
    this.router.navigate(['/principal']);
  }

  cambiarContenido(tipo: string) {
    switch (tipo) {
      case 'entrantes':
        this.platos = this.entrantes;
        break;
      case 'pastas':
        this.platos = this.pastas;
        break;
      case 'carnes':
        this.platos = this.carnes;
        break;
      case 'postres':
        this.platos = this.postres;
        break;
      case 'bebidas':
        this.platos = this.bebidas;
        break;
      default:
        this.platos = [];
        break;
    }
  }
}
