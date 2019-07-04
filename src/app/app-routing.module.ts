import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormularioComponent } from "./componentes/formulario/formulario.component";
import { WrapComponent } from './componentes/wrap/wrap.component';

const routes: Routes = [
  { path: "listado", component: WrapComponent },
  { path: "formulario/:id", component: FormularioComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
