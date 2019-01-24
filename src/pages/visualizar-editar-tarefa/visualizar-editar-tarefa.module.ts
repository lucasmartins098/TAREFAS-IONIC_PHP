import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualizarEditarTarefaPage } from './visualizar-editar-tarefa';

@NgModule({
  declarations: [
    VisualizarEditarTarefaPage,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    IonicPageModule.forChild(VisualizarEditarTarefaPage),
  ],
})
export class VisualizarEditarTarefaPageModule {}
