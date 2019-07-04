import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProveedorForm } from "./proveedor.form";
import { FormGroup } from "@angular/forms";
import { DataService } from "src/app/servicios/data.service";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  protected id: any;
  protected form: FormGroup;

  constructor(
    protected route: ActivatedRoute,
    protected formBuilder: ProveedorForm,
    protected dataService: DataService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.getForm();
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id !== "crear") {
      this.dataService.buscar(this.id).subscribe(data => {
        this.form.setValue(data);
      });
    }
  }

  submitForm() {
    if (this.id === "crear") {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    console.log("crear");
    const formValue = this.form.value;
    this.dataService.crear(formValue).subscribe(resp => {
      alert("Creado con exito");
    });
  }

  update() {
    const formValue = this.form.value;
    this.dataService.actualizar(this.id, formValue).subscribe(resp => {
      alert("Actualizado con exito");
    });
  }
}
