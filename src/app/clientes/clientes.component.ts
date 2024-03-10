import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CommonModule } from '@angular/common';
import { CLIENTES } from './clientes.json';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = CLIENTES;

ngOnInit() {
  this.clientes = CLIENTES
}

}
