import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignupPage } from '../pages/signup/signup';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule
  ],
  exports: [
    SignupPage
  ],
  entryComponents: [
    SignupPage
  ]
})
export class SignupModule {}
