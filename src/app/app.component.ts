import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraUsuarioComponent } from './cabecera-usuario/cabecera-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restauranteGit';
}
