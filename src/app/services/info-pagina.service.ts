import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaInterface } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaInterface = {};

  constructor(private http: HttpClient) {
    http.get('assets/data/data-pagina.json')
      .subscribe(result => {
        this.info = result;
      });
    console.log('Servido, joven.');
  }

}
