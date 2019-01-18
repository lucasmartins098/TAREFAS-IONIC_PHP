import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VisualizarEditarTarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-editar-tarefa',
  templateUrl: 'visualizar-editar-tarefa.html',
})
export class VisualizarEditarTarefaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public tarefa: Array<any> = [{nome:this.navParams.get("nome"),
  descricao:this.navParams.get("descricao"),
  idTarefa:this.navParams.get("idTarefa"),
  data:this.navParams.get("data"),
  horario:this.navParams.get("horario"),
  month: this.navParams.get("data"),
  timeStarts: this.navParams.get("horario"),
  timeEnds: this.navParams.get("horario")}];
  
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  ionViewDidLoad() {
    console.log("Construtor: "+ this.navParams.get('nome'));
  }

  


  // carregarTarefa(){
  //   this.tarefa.nome = this.navParams.get("nome");
  //   this.tarefa.descricao = this.navParams.get("descricao");
  //   this.tarefa.idTarefa = this.navParams.get("idTarefa");
  // }


}
