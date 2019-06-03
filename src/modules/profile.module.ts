import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule
  ],
  exports: [
    ProfilePage
  ],
  entryComponents: [
    ProfilePage
  ]
})
export class ProfileModule {}
