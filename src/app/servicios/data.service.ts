import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private path = "proveedores/free";

  constructor(private http: HttpClient) {}

  listar() {
    const url = environment.backend_api + this.path;
    return this.http.get(url).pipe(
      map((data: { ok: boolean; data: any[] }) => {
        return data.data;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  crear(data: any) {
    const url = environment.backend_api + this.path;

    return this.http.post(url, data).pipe(
      map(data => {
        return data;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  buscar(id: number | string) {
    const url = environment.backend_api + this.path + "/mostrar/" + id;

    return this.http.get(url).pipe(
      map(data => {
        return data.data;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  eliminar(id: number | string) {
    const url = environment.backend_api + this.path + "/" + id;

    return this.http.delete(url).pipe(
      map(data => {
        return data;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  actualizar(id: number | string, data: any) {
    const url = environment.backend_api + this.path + "/" + id;

    return this.http.put(url, data).pipe(
      map(resp => {
        return resp;
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }
}
