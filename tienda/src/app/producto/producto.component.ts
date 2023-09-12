import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../servicio/producto.service';
import { CarritoService } from '../servicio/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  @Input() producto: Producto[] = [];
  productos: Producto = {
    id: 0, // Esto podría ser generado automáticamente por tu API o base de datos
    nombre: '',
    precio: 0,
    descripcion: '',
    // Otras propiedades
    // Inicializa los campos del nuevo producto
  };
  productosEnCarrito: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.productosEnCarrito = this.carritoService.obtenerCarrito();
  }

  obtenerProductos(): void {
    this.productoService.obtenerProductos().subscribe((productos) => {
      this.producto = productos;
    });
  }

  crearProducto(): void {
    this.productoService.crearProducto(this.productos).subscribe((producto) => {
      this.producto.push(producto);
      this.productos = {
        id: 0, // Un valor válido para el ID
        nombre: '', // Un nombre válido
        precio: 0, // Un precio válido
        descripcion: '', // Una descripción válida
      }; // Limpia los campos del nuevo producto
    });
  }

  actualizarProducto(producto: Producto): void {
    this.productoService.actualizarProducto(producto).subscribe(() => {
      // Puedes manejar la actualización de la interfaz de usuario aquí si es necesario
    });
  }

  borrarProducto(id: number): void {
    this.productoService.borrarProducto(id).subscribe(() => {
      this.producto = this.producto.filter((p) => p.id !== id);
    });
  }
  agregarProductoAlCarrito(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
  }
  eliminarDelCarrito(producto: Producto): void {
    this.carritoService.eliminarDelCarrito(producto);
    this.productosEnCarrito = this.carritoService.obtenerCarrito();
  }

  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito();
    this.productosEnCarrito = [];
  }
}
