import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SendPhotoPage } from '../pages/send-photo/send-photo';

@NgModule({
  declarations: [
    SendPhotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule
  ],
  exports: [
    SendPhotoPage
  ],
  entryComponents: [
    SendPhotoPage
  ]
})
export class SendPhotoModule {}
