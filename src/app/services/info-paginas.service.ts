import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InfoPagina } from "../interfaces/info-pagina.interface";

@Injectable({
  providedIn: "root",
})
export class InfoPaginasService {
  info: InfoPagina = {};
  cargada: boolean = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get("assets/data-pagina.json").subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      
    });
  }

  private cargarEquipo() {
    this.http
      .get(
        "https://pulserastica-default-rtdb.europe-west1.firebasedatabase.app/equipo.json"
      )
      .subscribe((resp: any[]) => {
        this.cargada = true;
        this.equipo = resp;
      });
  }
}
