import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginPage } from '../pages/login/login';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule
  ],
  exports: [
    LoginPage
  ],
  entryComponents: [
    LoginPage
  ]
})
export class LoginModule {}
