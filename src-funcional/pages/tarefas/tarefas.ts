import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { VisualizarEditarTarefaPage } from '../visualizar-editar-tarefa/visualizar-editar-tarefa';
import { LoginPage } from '../login/login';
import * as $ from "jquery";

/**
 * Generated class for the TarefasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  private baseURL: string = "http://tarefasapi.000webhostapp.com/apiParaIONIC/api.php/";
  public itens: Array<any> = [];
  private token;
  private retorno;
  public itensFavoritos: Array<any> = [];
  public itensRealizados: Array<any> = [];
  private data: any = { nome: "", login: "", token: "", idUsuario: "" };
  public dado: any = {
    idUsuario: window.localStorage.getItem('idUsuario'),
    IdTarefa: ""
  };

  constructor(public navCtrl: NavController,
    public http: Http,
    public NP: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.carregarTiposDeTarefas();
    $('#segmentGeral').trigger('click');
    this.token = window.localStorage.getItem('token');
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "verificarLogado", "token": this.token },
      url: any = this.baseURL;
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        this.retorno = data._body;
        if (this.retorno != 1) {
          this.sendNotification("Faça login para acessar o sistema", 2000);
          this.navCtrl.setRoot(LoginPage);
        }
      },
        (error: any) => {
          console.log("ALGO ERRADO");
        });
  }

  ngAfterViewInit() {
    $('#segmentGeral').trigger('click');
  }

  ionViewDidLoad() {
    //this.sendNotification("Clique no tipo de tarefa desejada.",6000);
    this.instruirUsuario();
    $('#segmentGeral').trigger('click');
  }

  Fechaloading() {
    this.loader.dismiss();
  }

  carregarTarefas(): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "listarTarefas", "idUsuario": this.dado.idUsuario },
      url: any = this.baseURL;
    console.log("Passou pela função");
    // console.log(this.dado.login);
    console.log("Id para a tarefa: " + this.dado.idUsuario);
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        //this.data.response = data["_body"];
        //console.log(this.data.response);
        //console.log(data["_body"].nome);
        console.dir(data);
        const retorno = data._body;
        console.log("VER ESSE CONSOLE: "+retorno);
        this.itens = JSON.parse(data._body);
        this.data = JSON.parse(data._body);
        console.log("itens");
        console.log(this.itens);
        //console.log("TAREFA: "+this.itens["idTarefa"]);
        // console.log(this.itens["nome"]);
        // console.log(this.itens["token"]);
        // console.log(this.itens["idUsuario"]);
        // this.data.nome = this.itens["nome"];
        // this.data.token = this.itens["token"];
        // this.data.idUsuario = this.itens["idUsuario"];
        console.log(this.itens.length);
        for (let i = 0; i <= this.itens.length; i++) {
          console.log(this.itens[i]);
        }
        if (this.isrefresher) {
          this.refresher.complete();
          this.isrefresher = false;
        }
      },
        (error: any) => {
          console.log("ALGO ERRADO");
        });
  }
  public loader;

  AbreLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando"
    });
    this.loader.present();
  }

  carregarTarefasFavoritas(): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "listarTarefasFavoritas", "idUsuario": this.dado.idUsuario },
      url: any = this.baseURL;
    console.log("Passou pela função");
    // console.log(this.dado.login);
    console.log("Id para a tarefa: " + this.dado.idUsuario);
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        //this.data.response = data["_body"];
        //console.log(this.data.response);

        //console.log(data["_body"].nome);
        console.dir(data);
        const retorno = data._body;
        console.log(retorno);
        this.itensFavoritos = JSON.parse(data._body);
        this.data = JSON.parse(data._body);
        console.log("itens");
        console.log(this.itensFavoritos);
        console.log(this.itensFavoritos.length);
        for (let i = 0; i <= this.itensFavoritos.length; i++) {
          console.log(this.itensFavoritos[i]);
        }
      },
        (error: any) => {
          console.log("ALGO ERRADO");
        });
  }

  carregarTarefasRealizadas(): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "listarTarefasRealizadas", "idUsuario": this.dado.idUsuario },
      url: any = this.baseURL;
    console.log("Passou pela função");
    // console.log(this.dado.login);
    console.log("Id para a tarefa: " + this.dado.idUsuario);
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        //this.data.response = data["_body"];
        //console.log(this.data.response);

        //console.log(data["_body"].nome);
        console.dir(data);
        const retorno = data._body;
        console.log(retorno);
        this.itensRealizados = JSON.parse(data._body);
        this.data = JSON.parse(data._body);
        console.log("itens");
        console.log(this.itensRealizados);
        console.log(this.itensRealizados.length);
        for (let i = 0; i <= this.itensRealizados.length; i++) {
          console.log(this.itensRealizados[i]);
        }
      },
        (error: any) => {
          console.log("ALGO ERRADO");
        });
  }
  public refresher;
  public isrefresher: boolean = false;
  doRefresh(refresher) {
    this.refresher = refresher;
    this.isrefresher = true;
    this.carregarTiposDeTarefas();
  }

  showConfirmAlert(item) {
    const confirm = this.alertCtrl.create({
      title: 'Excluir tarefa permanentemente',
      message: 'Deseja excluir tarefa?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Não');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Sim');
            console.log(item);
            this.deletarTarefa(item);
            this.carregarTiposDeTarefas();
          }
        }
      ]
    });
    confirm.present();
  }

  deletarTarefa(tarefa) {
    console.log("ID TAREFA: " + tarefa.idTarefa);
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "deletarTarefa", "idTarefa": tarefa.idTarefa },
      url: any = this.baseURL;

    this.http
      .post(url, JSON.stringify(options), headers)
      .subscribe(data => {
        this.sendNotification(data["_body"], 2000);
        console.log(data["_body"]);
        this.carregarTiposDeTarefas();
      },
        (error: any) => {
          this.sendNotification('Aconteceu algo, a tarefa não foi deletada', 2000);
        });
  }


  carregarTiposDeTarefas() {
    this.AbreLoading();
    this.carregarTarefas();
    this.carregarTarefasFavoritas();
    this.carregarTarefasRealizadas();
    this.Fechaloading();
  }

  abrirParaVisualizarEditar(item) {
    console.log(item.favorito);
    console.log("abrir" + item);
    console.log("abrir" + item.idTarefa);
    console.log("abrir" + item.nome);
    console.log("abrir" + item.descricao);
    this.navCtrl.push(VisualizarEditarTarefaPage, { idTarefa: item.idTarefa, nome: item.nome, descricao: item.descricao, data: item.data, horario: item.horario, favorito: item.favorito });
  }

  sendNotification(message: string, duration: number): void {
    let notification = this.toastCtrl.create({
      message: message,
      duration: duration
    });
    notification.present();
  }

  instruirUsuario() {
    const confirm = this.alertCtrl.create({
      title: 'Instrução',
      message: 'Para ver as suas tarefas você deve selecionar o tipo da tarefa nas abas acima.(GERAL/FAVORITAS/REALIZADAS)',
      buttons: [
        {
          text: 'Compreendido',
          handler: () => {
            console.log('Compreendido');
            $('#segmentGeral').trigger('click');
          }
        }
      ]
    });
    confirm.present();
  }
}