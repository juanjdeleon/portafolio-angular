import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosServiceService } from '../../services/productos-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private productosService: ProductosServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['term']);
      this.productosService.filtrarProductos(params['term']);
    });
  }

}
