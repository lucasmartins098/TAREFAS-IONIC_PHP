import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { TarefasPage } from '../tarefas/tarefas';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    public alertCtrl: AlertController, public http: Http) {
  }

  private baseURL = "http://localhost/apiParaIONIC/api.php/";
  public tarefa: Array<any> = [{
    nome: this.navParams.get('nome'),
    descricao: this.navParams.get('descricao'),
    idTarefa: this.navParams.get('idTarefa'),
    data: this.navParams.get('data'),
    horario: this.navParams.get('horario'),
    favorito: false,
    realizada: false
  }];

  public tarefaJson = {
    nome: this.navParams.get('nome'),
    descricao: this.navParams.get('descricao'),
    idTarefa: this.navParams.get('idTarefa'),
    data: this.navParams.get('data'),
    horario: this.navParams.get('horario'),
    favorito: false,
    realizada: false
  };

  public event = {
    month: this.navParams.get('data'),
    timeStarts: this.navParams.get('horario'),
    timeEnds: this.navParams.get('horario')
  }

  ionViewDidEnter() {
    console.log("Construtor nOME: " + this.navParams.get('nome') + " " +this.tarefaJson.nome);
    console.log("Construtor DESC: " + this.navParams.get('descricao')+" " + this.tarefaJson.descricao);
    console.log("Construtor Favorito: " + this.navParams.get('favorito') +" " + this.tarefaJson.favorito);
    console.log("Construtor ID: " + this.navParams.get('idTarefa') + " " +this.tarefaJson.idTarefa);
    console.log("Construtor Realizada: " + this.navParams.get('realizada') +" " + this.tarefaJson.realizada);
    console.log("Construtor data: " + this.navParams.get('data') + " " +this.tarefaJson.data);
    console.log("Construtor horario: " + this.navParams.get('horario') + " " +this.tarefaJson.horario);
  }

  editarTarefa(): void {
    console.log(this.tarefa["idTarefa"]);
    console.log(this.tarefa["nome"]);
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "editarTarefa", "nome": this.tarefaJson.nome, "idTarefa": this.navParams.get('idTarefa'),
        "descricao": this.tarefaJson.descricao, "horario": this.event.timeStarts, "data": this.event.month, "favorito": this.tarefaJson.favorito, "realizada": this.tarefaJson.realizada  
      },
      url: any = this.baseURL;

      console.log(this.tarefaJson.realizada);
      console.log(this.tarefaJson.favorito);

    this.http
      .post(url, JSON.stringify(options), headers)
      .subscribe(data => {
        // If the request was successful notify the user
        //this.hideForm = true;
        console.log(data["_body"]);
        this.sendNotification(data["_body"]);
      },
        (error: any) => {
          this.sendNotification('Não editado');
        });
  }

  sendNotification(message: string): void {
    let notification = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    notification.present();
  }

}
