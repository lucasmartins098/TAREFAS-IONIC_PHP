import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CadastroTarefaPage } from '../cadastro-tarefa/cadastro-tarefa';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab4Root = CadastroTarefaPage;

  constructor() {

  }
}
