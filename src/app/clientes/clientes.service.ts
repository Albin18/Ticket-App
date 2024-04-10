import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { of, Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable()
export class ClientesService {
  private urlEndPoint : string = "http://localhost:8080/api/clientes"

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        Swal.fire('Error al encontrar el cliente', e.error.mensaje, 'error');
        return throwError(e);

      })
    );
  }

create (cliente: Cliente) : Observable<any[]>{
  return this.http.post<any[]>(this.urlEndPoint, cliente, {headers: this.httpHeaders}).pipe(
    catchError(e => {
      console.log(e.error.mensaje);
      Swal.fire(e.error.mensaje, e.error.error, 'error');
      return throwError(e);
    })
  );;
}

getCliente(id: Cliente): Observable<Cliente>{
  return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
    catchError(e => {
      console.log("Error e.get" + e.error.mensaje);
      Swal.fire('Error al obtener', e.error.mensaje, 'error');
      return throwError(e);
    })
  );
}

update(cliente: Cliente): Observable<any> {
  return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers:this.httpHeaders}).pipe(
    catchError(e => {
      console.log(e.error.mensaje);
      Swal.fire(e.error.mensaje, e.error.error, 'error');
      return throwError(e);
    })
  );
}

delete(id: number): Observable<Cliente>{
return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
  catchError(e => {
    console.log(e.error.mensaje)
    Swal.fire(e.error.mensaje, e.error.error, 'error');
    return throwError(e);
  })
);
}








}
