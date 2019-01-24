import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { HttpModule } from '@angular/http';
import { CadastroTarefaPage } from '../pages/cadastro-tarefa/cadastro-tarefa';
import { CadastroTarefaPageModule } from '../pages/cadastro-tarefa/cadastro-tarefa.module';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { VisualizarEditarTarefaPageModule } from '../pages/visualizar-editar-tarefa/visualizar-editar-tarefa.module';
import { SingUpPageModule } from '../pages/sing-up/sing-up.module';
import { IonicStorageModule } from '@ionic/storage';
import { SairPage } from '../pages/sair/sair';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CadastroTarefaPage,
    TarefasPage,
    SairPage,
    TabsPage
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthShortNames: ['Jan', 'Fev', 'Mar', "Abr", "Mai", "Jun", "Jul", "Ago", "Sep", "Out", "Nov", "Dez"],
      dayShortNames: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      backButtonText: "Voltar",
      doneText: 'Feito',
      cancelText: 'Cancelar',
    }),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpModule,
    LoginPageModule,
    SingUpPageModule,
    VisualizarEditarTarefaPageModule
    // CadastroTarefaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CadastroTarefaPage,
    TarefasPage,
    SairPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
