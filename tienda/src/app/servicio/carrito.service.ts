import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carrito: Producto[] = [];
  private carritoSubject = new BehaviorSubject<Producto[]>(this.carrito);
  private productosEnCarrito: Producto[] = [];
  constructor() {}
  getCarrito() {
    return this.carritoSubject.asObservable();
  }

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
    this.carritoSubject.next(this.carrito);
  }

  eliminarDelCarrito(producto: Producto) {
    const index = this.carrito.findIndex((item) => item.id === producto.id);
    if (index !== -1) {
      this.carrito.splice(index, 1);
      this.carritoSubject.next(this.carrito);
    }
  }

  vaciarCarrito() {
    this.carrito = [];
    this.carritoSubject.next(this.carrito);
  }
  // Obtiene la lista de productos en el carrito
  obtenerProductosEnCarrito(): Producto[] {
    return this.productosEnCarrito;
  }
  obtenerCarrito(): Producto[] {
    return this.carrito;
  }
}
