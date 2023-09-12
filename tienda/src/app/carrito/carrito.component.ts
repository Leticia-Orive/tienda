import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { CarritoService } from '../servicio/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  productosEnCarrito: Producto[] = []; // Define la propiedad productosEnCarrito

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Cuando el componente se inicie, obtén los productos del carrito desde el servicio
    this.productosEnCarrito = this.carritoService.obtenerProductosEnCarrito();
  }
  eliminarDelCarrito(producto: Producto): void {
    // Llama al servicio para eliminar el producto del carrito
    this.carritoService.eliminarDelCarrito(producto);
    // Actualiza la lista de productos en el carrito
    this.productosEnCarrito = this.carritoService.obtenerProductosEnCarrito();
  }
  // Definir el método vaciarCarrito en el componente
  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
  }
}
