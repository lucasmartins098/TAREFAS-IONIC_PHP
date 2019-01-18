import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualizarEditarTarefaPage } from './visualizar-editar-tarefa';

@NgModule({
  declarations: [
    VisualizarEditarTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(VisualizarEditarTarefaPage),
  ],
})
export class VisualizarEditarTarefaPageModule {}
