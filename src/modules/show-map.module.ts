import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ShowMapPage } from '../pages/show-map/show-map';

@NgModule({
  declarations: [
    ShowMapPage
  ],
  imports: [
    BrowserModule,
    IonicModule
  ],
  exports: [
    ShowMapPage
  ],
  entryComponents: [
    ShowMapPage
  ]
})
export class ShowMapModule {}
