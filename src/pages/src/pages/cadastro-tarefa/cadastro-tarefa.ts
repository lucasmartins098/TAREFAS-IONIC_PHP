import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import * as moment from 'moment';
import { LoginPageModule } from '../login/login.module';

/**
 * Generated class for the CadastroTarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-tarefa',
  templateUrl: 'cadastro-tarefa.html',
})
export class CadastroTarefaPage {

  public idUsuario: any;

  eventSource = [];
  viewTitle: string;
  noEventsLabel: string = "Não há eventos listados";
  selectedDay = new Date();
  calendar = {
    mode: 'month',
    locale: 'pt-br',
    currentDate: new Date()
  };
  private token;
  private retorno;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public http: Http) {
  }



  public dado: any = { nome: "", descricao: "", data: "", horario: "", favorito: true, idUsuario: window.localStorage.getItem('idUsuario') };
  private baseURL = "http://localhost/apiParaIONIC/api.php/";
  public itens: Array<any> = [];

  ionViewDidEnter() {
    console.log('ionViewDidLoad CadastroTarefaPage');
    this.dado = { nome: "", descricao: "", data: "", horario: "", favorito: true, idUsuario: this.navParams.get('idUsuario') }
    console.log(this.dado.idUsuario);

    this.token = window.localStorage.getItem('token');
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "verificarLogado", "token": this.token },
      url: any = this.baseURL;
    console.log(JSON.stringify(options));
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        this.retorno = data._body;
        if(this.retorno != 1){
          this.sendNotification("Faça login para acessar o sistema");
       this.navCtrl.setRoot(LoginPage);
        }
      },
        (error: any) => {
          console.log("ALGO ERRADO");
        });
  }


  public event = {
    month: '2019-02-19',//moment().day()+'/'+moment().month()+1+'/'+moment().year(),//'1990-02-19',
    timeStarts: '00:00',
    timeEnds: '1990-02-20'
  }

  cadastrarTarefa() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "cadastrarTarefa", "nome": this.dado.nome, "descricao": this.dado.descricao, "data": this.event.month,
        "horario": this.event.timeStarts, "favorito": this.dado.favorito, "idUsuario": this.dado.idUsuario
      },
      url: any = this.baseURL;
    console.log("Passou pela função");
    console.log("FAVORITO");
    console.log(this.dado.favorito);
    console.log("FAVORITO");
    console.log(this.dado.descricao);
    console.log("Data: " + this.event.month);
    console.log("Horário: " + this.event.timeStarts);
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.dir(data);
        const retorno = data._body;
        console.log(retorno);
        console.log(retorno);
        this.sendNotification("Tarefa cadastrada com sucesso.");
      },
        (error: any) => {
          console.log("ALGO ERRADO.");
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
