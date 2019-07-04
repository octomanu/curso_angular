import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/servicios/data.service";

@Component({
  selector: "app-wrap",
  templateUrl: "./wrap.component.html",
  styleUrls: ["./wrap.component.css"]
})
export class WrapComponent implements OnInit {
  data: any[];

  constructor(protected dataService: DataService) {}

  ngOnInit() {
    this.actualizarData();
  }

  eliminar(id) {
    this.dataService.eliminar(id).subscribe(data => {
      this.actualizarData();
      alert("Eliminado");
    });
  }

  actualizarData() {
    this.dataService.listar().subscribe((data: any[]) => {
      this.data = data;
    });
  }
}
