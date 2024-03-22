import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
 cliente: Cliente = new Cliente();
constructor(){}

ngOnInit() {

}

public create(): void {
  console.log("CLICKED");
  console.log(this.cliente);
}

titulo: string ="TU MADRE"
}
