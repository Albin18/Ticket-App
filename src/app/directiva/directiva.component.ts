import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directiva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css'
})
export class DirectivaComponent {

listaTecnologias: string[] = ['TypeScript', 'JavaScript', 'JavaSE', 'C#', 'PHP']

mostrar : boolean = true;

constructor(){ }

setMostrar(): void{
  this.mostrar = (this.mostrar == true) ? false :true
}

}
