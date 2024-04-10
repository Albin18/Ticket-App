import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
  providers:[ClientesService]
})
export class ClientesComponent implements OnInit {

clientes: any;

  constructor(private clienteService: ClientesService){

   }

ngOnInit() {
  this.clienteService.getClientes().subscribe(
clientes => this.clientes = clientes
   );
  }

  delete(cliente: Cliente): void{
    Swal.fire({
      title: "Are you sure?",
      text: `Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "No, Cancelar"
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            this.clientes = this.clientes.filter((clie: Cliente) => clie !== cliente);

          }
        )
      }
    });
  }

}
