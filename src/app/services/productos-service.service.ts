import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  productos: ProductoInterface[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-html-c9f03.firebaseio.com/productos_idx.json')
      .subscribe((result: ProductoInterface[]) => {
        this.productos = result;
        console.log(result);
        this.cargando = false;
      });
  }
}
