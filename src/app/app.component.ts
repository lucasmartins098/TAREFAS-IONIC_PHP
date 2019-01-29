import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ConfigProvider } from '../providers/config/config';
import { IntroPage } from '../pages/intro/intro';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  private baseURL: string = "http://tarefasapi.000webhostapp.com/apiParaIONIC/api.php/";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    configProvider: ConfigProvider,
    public http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let token = window.localStorage.getItem('token');
      if (token != null) {
        let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options: any = { "key": "verificarLogado", "token": token },
          url: any = this.baseURL;
        this.http.post(url, JSON.stringify(options), headers)
          .subscribe((data: any) => {
            if (data._body == 1) {
              this.rootPage = TabsPage;
            }
            else {
              let config = configProvider.getConfigData();
              if (config == null) {
                this.rootPage = IntroPage;
                configProvider.setConfigData(false);
              }
              else {
                this.rootPage = LoginPage;
              }
            }
          },
            (error: any) => {
              console.log("ALGO ERRADO");
            });
      }
      else {
        let config = configProvider.getConfigData();
        if (config == null) {
          this.rootPage = IntroPage;
          configProvider.setConfigData(false);
        }
        else {
          this.rootPage = LoginPage;
        }
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
