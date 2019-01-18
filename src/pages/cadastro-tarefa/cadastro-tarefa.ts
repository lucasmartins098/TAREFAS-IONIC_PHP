import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs';

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

  public idUsuario:any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public http: Http
    ) {
     
      // tabs:TabsPage
      //this.idUsuario = TabsPage.idUsuario;
  }

  public dado: any = { nome: "", descricao: "", data: "", horario: "", favorito: true, idUsuario : this.navParams.get('idUsuario')};
  private baseURL = "http://localhost/apiParaIONIC/api.php/";
  public itens: Array<any> = [];

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroTarefaPage');
    console.log(this.dado.idUsuario);
  }
 

  //cucumber: boolean;

  // updateCucumber() {
  //   console.log('Cucumbers new state:' + this.dado.favorito);
  // }

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  cadastrarTarefa() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "cadastrarTarefa", "nome": this.dado.nome, "descricao": this.dado.descricao, "data": this.event.month,
        "horario": this.event.timeStarts, "favorito": this.dado.favorito, "idUsuario" : this.dado.idUsuario 
      },
    url: any = this.baseURL;
    console.log("Passou pela função");
    console.log("FAVORITO");
    console.log(this.dado.favorito);
    console.log("FAVORITO");
    console.log(this.dado.descricao);
    console.log("Data: "+this.event.month);
    console.log("Horário: " + this.event.timeStarts);
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        //this.data.response = data["_body"];
        //console.log(this.data.response);
        //console.log(data["_body"].nome);
        console.dir(data);
        const retorno = data._body;
        console.log(retorno);
        //this.itens = JSON.parse(data._body);
        //console.log("itens");
        console.log(retorno);
        // console.log(this.itens.length);
        // for (let i = 0; i <= this.itens.length; i++) {
        //    console.log(this.itens[i]);
        // }  
        this.sendNotification("Tarefa cadastrada com sucesso");
      },
        (error: any) => {
          console.log("ALGO ERRADO");
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
