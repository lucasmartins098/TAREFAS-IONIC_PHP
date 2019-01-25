import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { CadastroTarefaPage } from '../cadastro-tarefa/cadastro-tarefa';
import { NavParams } from 'ionic-angular';
import { TarefasPage } from '../tarefas/tarefas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab4Root = CadastroTarefaPage;
  tab5Root = TarefasPage;
  

  constructor(public navParams: NavParams) {
    
  }
  //public idUsuario = this.navParams.get('id');

  fooId = {
    idUsuario: this.navParams.get('id')
  };
  
}
