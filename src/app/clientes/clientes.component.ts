import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
  providers:[ClientesService]
})
export class ClientesComponent implements OnInit {
clientes: any;



  constructor(private clienteService: ClientesService){}

ngOnInit() {
  this.clientes = this.clienteService.getClientes()
}

}
