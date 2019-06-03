import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { BrowserPushNotificationProvider } from '../providers/browser-push-notification/browser-push-notification';
import { ConnectionInternetStateProvider } from '../providers/connection-internet-state/connection-internet-state';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage:any = LoginPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private browserPushNotificationProvider: BrowserPushNotificationProvider,
              private connectionInternetStateProvider: ConnectionInternetStateProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.monitorInternet();
  }

  private monitorInternet(){
    this.connectionInternetStateProvider.monitor().subscribe(isConnected => {
        this.createNotificationForInfoInternetStatus(isConnected);
    })
  }

  private createNotificationForInfoInternetStatus(isConnected: boolean){
    const data: Array<any>= [];

    if(isConnected){
      data.push({
          'title': 'Conectado!',
          'alertContent': 'Você está com acesso á Internet.'
      });
    }else {
      data.push({
        'title': 'Sem Conexão!',
        'alertContent': 'No momento você está offline.'
      });
    }

    this.browserPushNotificationProvider.generateNotification(data);
  }





}

