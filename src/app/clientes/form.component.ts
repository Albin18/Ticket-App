import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { FormsModule } from '@angular/forms';
import { ClientesService } from './clientes.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [ClientesService],
})
export class FormComponent implements OnInit {
 cliente: Cliente = new Cliente();
titulo: string ="TU MADRE"


constructor (private clientesService: ClientesService,
  private router: Router) {}

ngOnInit() {

}

 create(): void {
 this.clientesService.create(this.cliente)
 .subscribe(cliente => {
  this.router.navigate(['/clientes'])
  swal.fire('Nuevo cliente', `Cliente creado con exito!`, 'success')
   }
 );
}


}
