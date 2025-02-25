import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CabeceraUsuarioComponent } from '../cabecera-usuario/cabecera-usuario.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CabeceraUsuarioComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  constructor(private router: Router) {}

  pedidos() {
    this.router.navigate(['/pedidos']);
  }
}
