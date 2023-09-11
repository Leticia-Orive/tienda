import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';
import { ProductoService } from '../servicio/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  nuevoProducto: Producto = {
    id: 0, // Esto podría ser generado automáticamente por tu API o base de datos
    nombre: '',
    precio: 0,
    descripcion: '',
    // Otras propiedades
    // Inicializa los campos del nuevo producto
  };

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.obtenerProductos().subscribe((productos) => {
      this.productos = productos;
    });
  }

  crearProducto(): void {
    this.productoService
      .crearProducto(this.nuevoProducto)
      .subscribe((producto) => {
        this.productos.push(producto);
        this.nuevoProducto = {
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
      this.productos = this.productos.filter((p) => p.id !== id);
    });
  }
}
