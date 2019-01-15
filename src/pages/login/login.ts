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
  public baseURI: any;
  private data:any = {};

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
      options: any = { "key": "Login", "login": this.dado.login, "senha": this.dado.senha },
      url: any = this.baseURI + "'DEFINIR'.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        this.data.response = data["_body"];
      },
        (error: any) => {
          console.log("ALGO ERRADO");
          //   this.sendNotification('Something went wrong!');
        });
  }

}
