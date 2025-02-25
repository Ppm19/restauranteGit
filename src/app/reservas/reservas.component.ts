import { Component } from '@angular/core';
import { CabeceraUsuarioComponent } from '../cabecera-usuario/cabecera-usuario.component';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CabeceraUsuarioComponent],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent {

}
