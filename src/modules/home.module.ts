import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePage } from '../pages/home/home';
import { IonicModule } from 'ionic-angular';
import { LoginModule } from './login.module';
import { SignupModule } from './signup.module';
import { PhotosModule } from './photos.module';
import { TakePictureModule } from './take-picture.module';
import { SendPhotoModule } from './send-photo.module.';
import { ProfileModule } from './profile.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule,
    LoginModule,
    SignupModule,
    PhotosModule,
    TakePictureModule,
    SendPhotoModule,
    ProfileModule
  ],
  exports: [
    HomePage
  ],
  entryComponents: [
    HomePage
  ]
})
export class HomeModule {}
