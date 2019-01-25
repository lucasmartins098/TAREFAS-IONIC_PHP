import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroTarefaPage } from './cadastro-tarefa';

@NgModule({
  declarations: [
    CadastroTarefaPage,
  ],
  imports: [ 
    MbscModule, 
    FormsModule, 
    IonicPageModule.forChild(CadastroTarefaPage),
  ],
})
export class CadastroTarefaPageModule {}
