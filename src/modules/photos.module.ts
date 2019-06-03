import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PhotosPage } from '../pages/photos/photos';
import { ShowMapModule } from './show-map.module';

@NgModule({
  declarations: [
    PhotosPage
  ],
  imports: [
    BrowserModule,
    IonicModule,
    ShowMapModule
  ],
  exports: [
    PhotosPage
  ],
  entryComponents: [
    PhotosPage
  ]
})
export class PhotosModule {}
