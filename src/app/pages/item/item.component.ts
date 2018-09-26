import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServiceService } from '../../services/productos-service.service';
import { ProductoDetalleInterface } from '../../interfaces/producto-detalle-interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDetalleInterface;
  id: string;

  constructor(private router: ActivatedRoute,
              public productoService: ProductosServiceService) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      this.productoService.getProducto(params['id']).subscribe((producto: ProductoDetalleInterface) => {
        this.id = params['id'];
        this.producto = producto;
      });
    });

  }

}
