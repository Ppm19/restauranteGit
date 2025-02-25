import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CabeceraUsuarioComponent } from '../cabecera-usuario/cabecera-usuario.component';
import { PedidoService } from '../pedido.service';
import { Entrantes } from './modelos/entrantes';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CabeceraUsuarioComponent],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  constructor(private router: Router, private pedidoService: PedidoService) {}

  entrantes: Entrantes[] = [];

  ngOnInit() {
    this.pedidoService.getEntrantes().subscribe(
      (data: Entrantes[]) => {
        this.entrantes = data;
        console.log(this.entrantes);
      },
      error => {
        console.error('Error al obtener los entrantes:', error);
      }
    );
  }

  principal() {
    this.router.navigate(['/principal']);
  }
}
