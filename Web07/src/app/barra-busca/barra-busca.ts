import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-barra-busca',
  styleUrl: './barra-busca.css',
  templateUrl: './barra-busca.html',
})
export class BarraBusca {
  busca: string = '';

  constructor() {
    if (typeof localStorage !== 'undefined') {
      this.busca = localStorage.getItem('busca') || '';
    }
  }

  salvarBusca(): void {
    if (typeof localStorage !== 'undefined') {
    localStorage.setItem('busca', this.busca);
  }
  }
}
