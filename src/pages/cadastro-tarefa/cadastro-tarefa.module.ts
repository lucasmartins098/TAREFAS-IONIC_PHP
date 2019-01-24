import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroTarefaPage } from './cadastro-tarefa';

@NgModule({
  declarations: [
    CadastroTarefaPage,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    IonicPageModule.forChild(CadastroTarefaPage),
  ],
})
export class CadastroTarefaPageModule {}
