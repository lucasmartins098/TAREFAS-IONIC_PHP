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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CadastroTarefaPage,
    TarefasPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    LoginPageModule,
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
