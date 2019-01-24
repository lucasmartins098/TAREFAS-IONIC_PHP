import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { CadastroTarefaPage } from '../cadastro-tarefa/cadastro-tarefa';
import { TabsPage } from '../tabs/tabs';
import { SingUpPage } from '../sing-up/sing-up';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public dado: any = {
    login: ""
    , senha: ""
  };
  private baseURL: string = "http://localhost/apiParaIONIC/api.php/";
  private data: any = { nome: "", login: "", token: "", idUsuario: "" };
  public itens: Array<any> = [];
  private token;
  private retorno;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public http: Http) {
    console.log('kdsjkjd');
  }

  ionViewDidLoad() {
    
    this.token = window.localStorage.getItem('token');
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "verificarLogado", "token": this.token },
      url: any = this.baseURL;
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        this.retorno = data._body;
        if(this.retorno == 1){
       this.navCtrl.setRoot(TabsPage, { id: this.data.idUsuario });
        }
      },
        (error: any) => {
          console.log("ALGO ERRADO");
        });
  }

  // public verificarLogado(): boolean {
    
  // }

  /**
    * Faz Login na api0
    * 
    *
    * @public
    * @method login
    * @param login 	{String} login value from 
    * @param senha 	{String} senha value
    * @return {None}
    */
  login(): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "logar", "login": this.dado.login, "senha": this.dado.senha },
      url: any = this.baseURL;
    console.log("Passou pela função");
    console.log(this.dado.login);
    console.log(this.dado.senha);
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.dir(data);
        const retorno = data._body;
        console.log(retorno);
        if (retorno != 0) {
          this.itens = JSON.parse(data._body);
          console.log("itens");
          console.log(this.itens);
          console.log(this.itens["nome"]);
          console.log(this.itens["token"]);
          console.log(this.itens["idUsuario"]);
          this.data.nome = this.itens["nome"];
          this.data.token = this.itens["token"];
          this.data.idUsuario = this.itens["idUsuario"];
          window.localStorage.setItem('token', this.data.token);
          window.localStorage.setItem('idUsuario', this.data.idUsuario);
          this.navCtrl.setRoot(TabsPage, { id: this.data.idUsuario });
        }
        else {
          console.log("Usuário não existe!");
          this.sendNotification("Usuário não existe!");
        }
      },
        (error: any) => {
          console.log("ALGO ERRADO");
        });
  }

  signup() {
    //this.navCtrl.setRoot(SingUpPage);
    this.navCtrl.push(SingUpPage);
  }

  sendNotification(message: string): void {
    let notification = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    notification.present();
  }

}
