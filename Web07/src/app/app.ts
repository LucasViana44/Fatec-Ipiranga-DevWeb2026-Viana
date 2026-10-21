import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topo } from './topo/topo';
import { Rodape } from './rodape/rodape';
import { Menu } from './menu/menu';
import { BarraBusca } from './barra-busca/barra-busca';
import { FormsModule } from '@angular/forms'; 

@Component({
  imports: [RouterOutlet, Topo, Rodape, Menu, BarraBusca, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Web07');
}
