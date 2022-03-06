import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Producto } from "../interfaces/producto.interface";

@Injectable({
  providedIn: "root",
})
export class ProductosService {
  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http
        .get(
          "https://pulserastica-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json"
        )
        .subscribe((resp: Producto[]) => {
          this.productos = resp;
          this.cargando = false;
          // resolve();
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(
      `https://pulserastica-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`
    );
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach((producto) => {
      const tituloLower = producto.titulo.toLocaleLowerCase();

      if (
        producto.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >= 0
      ) {
        this.productosFiltrado.push(producto);
      }
    });
  }
}
