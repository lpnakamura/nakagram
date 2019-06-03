import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { HomeModule } from '../modules/home.module';
import { ConnectionInternetStateProvider } from '../providers/connection-internet-state/connection-internet-state';
import { BrowserPushNotificationProvider } from '../providers/browser-push-notification/browser-push-notification';


const firebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx",
  appId: "xxxxx"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectionInternetStateProvider,
    BrowserPushNotificationProvider
  ]
})
export class AppModule {}
