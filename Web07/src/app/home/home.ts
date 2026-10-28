import { Component } from '@angular/core';
import { Cesta } from '../model/cesta/cesta';
import { CestaDetalhe } from '../cesta-detalhe/cesta-detalhe';
import { ItemCesta } from '../model/item-cesta/item-cesta';

@Component({
  imports: [CestaDetalhe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  cesta = new Cesta();
  constructor() {
  this.cesta.adicionarItem(
    new ItemCesta(1, 'Whey Protein', 100, 1)
  );
}
}