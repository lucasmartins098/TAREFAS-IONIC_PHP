import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import * as moment from 'moment';
import { Calendar } from 'ionic3-calendar-neo-ptbr/src/calendar/calendar';
import * as $ from "jquery";



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

  data: any;
  desktop: Date;

 //calendar2 : Calendar; // = {
//   currentDate: 1,
//   currentMonth: 1
// };
  // this.calendar2.currentDate = 24;
  //   this.calendar2.currentYear = 2019;
  //   this.calendar2.currentMonth = 1;

  
  
  public idUsuario: any;

  eventSource = [];
  viewTitle: string;
  noEventsLabel: string = "Não há eventos listados";
  selectedDay = new Date();
  // calendar = {
  //   mode: 'month',
  //   locale: 'pt-br',
  //   currentDate: new Date(2019, 1, 1)
  // };
  private token;
  private retorno;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public http: Http) {
      //this.calendar2.currentDate = 1;
      //this.calendar2.displayYear = 2020; //currentYear = 1;
      // this.calendar2.currentMonth = 1;
      // this.calendar2.currentDay = 1;
      // this.calendar2.today;
      //this.calendar2
  }
  calendario={ano:moment().year(),mes:moment().month(),dia:moment().date()};

  ngAfterViewInit(){
    console.log("ANO: "+this.calendario.ano);
    console.log("MES: "+this.calendario.mes);
    console.log("DIA: "+this.calendario.dia);
    $('#idBotao2').trigger('click');
      console.log("VIEW INI CADASTRO");
  }
  ionViewWillUnload(){
    $('#idBotao2').trigger('click');
  }
  public dado: any = { nome: "", descricao: "", data: "", horario: "", favorito: true, idUsuario: window.localStorage.getItem('idUsuario') };
  private baseURL = "http://tarefasapi.000webhostapp.com/apiParaIONIC/api.php/";
  public itens: Array<any> = [];

  ionViewDidLoad(){
    this.calendario={ano:moment().year(),mes:moment().month(),dia:moment().date()};
    $('#idBotao2').trigger('click');
    console.log("aqui");
  }

  ionViewWillEnter(){
    $('#idBotao2').trigger('click');
  }

  ionViewDidEnter() {
    //this.calendario={ano:moment().year(),mes:moment().month(),dia:moment().date()};    
    $('#idBotao2').trigger('click');
    console.log("ENTER");
    console.log("///TESTE DOS HORARIOS/////");
    console.log('dia: ' + moment().date());
    console.log('mes: ' + moment().months());
    console.log('ano: ' + moment().year());
    console.log('hora: ' + moment().hour());
    console.log('minutos: ' + moment().minutes());
    console.log('minutos: ' + moment().date());
    console.log('calendario: ' + moment().calendar());
    console.log("///TESTE DOS HORARIOS/////");

    this.dado = { nome: "", descricao: "", data: "", horario: "", favorito: true, idUsuario: window.localStorage.getItem('idUsuario') }
    console.log(this.dado.idUsuario);

    this.token = window.localStorage.getItem('token');
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "verificarLogado", "token": this.token },
      url: any = this.baseURL;
    console.log(JSON.stringify(options));
    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        this.retorno = data._body;
        if (this.retorno != 1) {
          this.sendNotification("Faça login para acessar o sistema");
          this.navCtrl.setRoot(LoginPage);
        }
      },
        (error: any) => {
          console.log("ALGO ERRADO");
        });
  }

  public event = {
    month: moment().days() + '-' + moment().months() + 1 + '-' + moment().year(),//moment().day()+'/'+moment().month()+1+'/'+moment().year(),//'1990-02-19',
    timeStarts: moment().hour() + ':' + moment().minutes(),
    timeEnds: '1990-02-20'
  }

  cadastrarTarefa() {
    //console.log("DIA agrrr: "+this.teste.calendarSystem);

    console.log("data com PLUGIN: "+this.data);
    if (this.dado.descricao != "" && this.dado.nome != "") {

      let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
        options: any = {
          "key": "cadastrarTarefa", "nome": this.dado.nome, "descricao": this.dado.descricao, "data": this.data,
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
          this.sendNotification("Tarefa cadastrada com sucesso.");
        },
          (error: any) => {
            console.log("ALGO ERRADO.");
          });
    }
    else {
      this.sendNotification("Não deixe nenhum campo em branco.");
    }
  }

  selecionarDia(event){
    console.log("EVENTO: "+event.date + "-" +(event.month+1)+ "-" +event.year);
    this.data = event.year + "-" +(event.month+1)+ "-" +event.date;
    console.log(this.data);
    console.log("\\SELECIONAR DIA INICIADO://");
  }

  sendNotification(message: string): void {
    let notification = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    notification.present();
  }
}
