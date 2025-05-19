import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems: string[] = ['Inicio', 'Novo Atendimento', 'Novo Cadastro', 'Buscar', 'Processos', 'Relatórios', 'Sair'];

}
