import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TakePicturePage } from '../pages/take-picture/take-picture';

@NgModule({
  declarations: [
    TakePicturePage
  ],
  imports: [
    BrowserModule,
    IonicModule
  ],
  exports: [
    TakePicturePage
  ],
  entryComponents: [
    TakePicturePage
  ]
})
export class TakePictureModule {}
