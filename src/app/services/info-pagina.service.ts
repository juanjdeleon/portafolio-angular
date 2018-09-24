import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPaginaInterface } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaInterface = {};

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe(result => {
        this.info = result;
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-c9f03.firebaseio.com/equipo.json')
      .subscribe((result: any[]) => {
        this.info.equipo_trabajo = result;
        console.log(result);
      });
  }

}
