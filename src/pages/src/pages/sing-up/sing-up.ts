import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the SingUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sing-up',
  templateUrl: 'sing-up.html',
})
export class SingUpPage {

  dado = {nome:"",login:"",senha:"",senhaConfirmada:""};
  private baseURL = "http://localhost/apiParaIONIC/api.php/";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingUpPage');
  }

  cadastrarUsuario() {
    if(this.dado.senha==this.dado.senhaConfirmada){
      if(this.dado.senha != "" || this.dado.nome != "" || this.dado.login != ""){
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "cadastrarUsuario", "nome": this.dado.nome, "login": this.dado.login, "senha": this.dado.senha
      },
      url: any = this.baseURL;
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.dir(data);
        const retorno = data._body;
        console.log(retorno);
        this.sendNotification(retorno);
      },
        (error: any) => {
          console.log("ALGO ERRADO.");
        });
      }
      else{
        this.sendNotification("Não deixe nenhum campos em branco.");
      }
      }
      else{
        this.sendNotification("Senhas não coincidem.");
      }
  }

  sendNotification(message: string): void {
    let notification = this.toastCtrl.create({
      message: message,
      duration: 7000
    });
    notification.present();
  }

}
