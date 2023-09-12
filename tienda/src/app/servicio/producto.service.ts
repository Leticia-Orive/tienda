import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto.model';
@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'http://localhost:4200/'; // Reemplaza 'tu_url_api' con la URL de tu API
  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/productos`);
  }

  crearProducto(nuevoProducto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiUrl}/productos`, nuevoProducto);
  }

  // Método para actualizar un producto
  actualizarProducto(producto: Producto): Observable<Producto> {
    const url = `${this.apiUrl}/productos/${producto.id}`; // Reemplaza con la URL correcta para actualizar un producto
    return this.http.put<Producto>(url, producto);
  }

  borrarProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/productos/${id}`);
  }
  agregarProductoAlCarrito(producto: Producto) {
    // Lógica para agregar el producto al carrito
  }
}
