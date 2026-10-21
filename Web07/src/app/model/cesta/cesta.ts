import { Component } from '@angular/core';
import { ItemCesta } from '../item-cesta/item-cesta';

@Component({
  imports: [],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  itens: ItemCesta[] = [];

  adicionarItem(item: ItemCesta): void {
    this.itens.push(item);
  }

  calcularTotal(): number {
    return this.itens.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
  }
}
