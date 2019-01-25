import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualizarEditarTarefaPage } from './visualizar-editar-tarefa';

@NgModule({
  declarations: [
    VisualizarEditarTarefaPage,
  ],
  imports: [ 
    MbscModule, 
    FormsModule, 
    IonicPageModule.forChild(VisualizarEditarTarefaPage),
  ],
})
export class VisualizarEditarTarefaPageModule {}
