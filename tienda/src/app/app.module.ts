import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProductoComponent, CarritoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
