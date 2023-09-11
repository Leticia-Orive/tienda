import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';

//import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  // { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductoComponent },

  // Otras rutas si es necesario
  { path: '', redirectTo: '/productos', pathMatch: 'full' }, // Redirigir a 'productos' por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
