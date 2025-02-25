import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  constructor(private router: Router) {}
}
