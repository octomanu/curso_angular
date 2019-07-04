import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "src/app/servicios/data.service";

@Component({
  selector: "app-listado",
  templateUrl: "./listado.component.html",
  styleUrls: ["./listado.component.css"]
})
export class ListadoComponent implements OnInit {
  @Input() proveedores = [];
  @Output() eliminarProveedor = new EventEmitter<number>();

  constructor(protected dataService: DataService) {}

  ngOnInit() {}

  eliminar(id: number) {
    this.eliminarProveedor.emit(id);
  }
}
