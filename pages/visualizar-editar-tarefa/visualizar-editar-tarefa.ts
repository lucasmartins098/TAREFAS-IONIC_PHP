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
    nome: this.navParams.get("nome"),
    descricao: this.navParams.get("descricao"),
    idTarefa: this.navParams.get("idTarefa"),
    data: this.navParams.get("data"),
    horario: this.navParams.get("horario"),
    month: this.navParams.get("data"),
    timeStarts: this.navParams.get("horario"),
    timeEnds: this.navParams.get("horario")
  }];

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  ionViewDidEnter() {
    console.log("Construtor nOME: " + this.navParams.get('nome') + this.tarefa["nome"]);
    console.log("Construtor DESC: " + this.navParams.get('descricao') + this.tarefa["descricao"]);
  }

  editarTarefa(): void {
    console.log(this.tarefa["idTarefa"]);
    console.log(this.tarefa["nome"]);
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "editarTarefa", "nome": this.tarefa["nome"], "IdTarefa": this.tarefa["idTarefa"],
        "descricao": this.tarefa["descricao"], "horario": this.tarefa["timeStarts"], "data": this.tarefa["month"]
      },
      url: any = this.baseURL;

    this.http
      .post(url, JSON.stringify(options), headers)
      .subscribe(data => {
        // If the request was successful notify the user
        //this.hideForm = true;
        this.sendNotification(data["_body"]);
      },
        (error: any) => {
          this.sendNotification('Não editado');
        });
  }

  sendNotification(message: string): void {
    let notification = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    notification.present();
  }

}
