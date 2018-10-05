import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  productos: ProductoInterface[] = [];
  productosFiltrado: ProductoInterface[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-c9f03.firebaseio.com/productos_idx.json')
      .subscribe((result: ProductoInterface[]) => {
        this.productos = result;
        this.cargando = false;
      });
      resolve();
    });
  }

  public getProducto(id: string) {
    return this.http.get(`https://angular-html-c9f03.firebaseio.com/productos/${id}.json`);
  }

  public filtrarProductos(busqueda: string) {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.aplicarFiltro(busqueda);
      });
    }
    else
      this.aplicarFiltro(busqueda);
  }

  private aplicarFiltro(filtro: string) {
    this.productosFiltrado = [];

    this.productos.forEach(producto => {
      if (producto.categoria.toLocaleLowerCase().indexOf(filtro.toLowerCase()) >= 0 ||
          producto.titulo.toLowerCase().indexOf(filtro.toLocaleLowerCase()) >= 0)
        this.productosFiltrado.push(producto);
    });

    console.log(this.productosFiltrado);    
  }
}
