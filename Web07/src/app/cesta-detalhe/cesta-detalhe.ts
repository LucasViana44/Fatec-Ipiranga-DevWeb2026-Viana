import { Component, Input } from '@angular/core';
import { Cesta } from '../model/cesta/cesta';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-cesta-detalhe',
  imports: [CommonModule],
  templateUrl: './cesta-detalhe.html',
  styleUrl: './cesta-detalhe.css',
})
export class CestaDetalhe {
  @Input() cesta!: Cesta;

  removerItem(id: number): void {
    this.cesta.removerItem(id);
  }
}