import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CabeceraUsuarioComponent } from "../cabecera-usuario/cabecera-usuario.component";
import { Pedido } from '../pedidos/modelos/pedido';
import { PedidoService } from '../pedido.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-realizar-pedido',
  standalone: true,
  imports: [CabeceraUsuarioComponent, FormsModule, CommonModule],
  templateUrl: './realizar-pedido.component.html',
  styleUrl: './realizar-pedido.component.css',
  providers: [PedidoService]
})

export class RealizarPedidoComponent implements OnInit {

  pedidos: Pedido[] = [];

  pedido!: Pedido;

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.pedido = history.state.pedido
    }
    this.obtenerPedidos();
  }

  irPedidos() {
    this.router.navigate(['/pedidos']);
  }

  principal() {
    this.router.navigate(['/principal']);
  }

  realizarPedido() {
      this.pedido.nombre = `Pedido ${this.pedidos.length + 1}`;
      this.pedidoService.realizarPedido(this.pedido).subscribe(
      (response: any) => {
        console.log(response);
      }
    );
    alert("Pedido realizado correctamente");
    this.router.navigate(['/pedidos']);
  }

  obtenerPedidos() {
    this.pedidoService.obtenerPedidos().subscribe((pedidos: Pedido[]) => {
      this.pedidos = pedidos;
    });
  }
}
