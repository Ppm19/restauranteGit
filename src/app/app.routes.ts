import { Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PrincipalComponent } from './principal/principal.component';
export const routes: Routes = [
    {path:"", redirectTo:"principal", pathMatch:"full"},
    {path:"principal", component:PrincipalComponent},
    {path:"pedidos", component:PedidosComponent}
];

