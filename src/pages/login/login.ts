import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

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
  private data: any = {};
  public itens: Array<any> = [];

  constructor(public http: Http) {
    console.log('kdsjkjd');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
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
        //this.data.response = data["_body"];
        //console.log(this.data.response);

        //console.log(data["_body"].nome);
        console.dir(data);
        const retorno = data._body;
        console.log(retorno);
        if (retorno != 0) {
          this.itens = JSON.parse(data._body);
          console.log("itens");
          console.log(this.itens);
          // console.log(this.itens.length);
          // for (let i = 0; i <= this.itens.length; i++) {
          //    console.log(this.itens[i]);
          // }  
        }
        else{
          console.log("Usuário não existe!");
          //Fazer mensagem de usuário não existe!!
        }
      },
        (error: any) => {
          console.log("ALGO ERRADO");
        });
  }

}
