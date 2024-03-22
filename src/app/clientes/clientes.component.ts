import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form.component';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormComponent],
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

}
