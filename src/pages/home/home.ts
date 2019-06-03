import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PhotosPage } from '../photos/photos';
import { TakePicturePage } from '../take-picture/take-picture';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public photosTab: any;
  public profileTab: any;

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
    this.photosTab = PhotosPage;
    this.profileTab = ProfilePage;
  }

  showSendPhoto(){
    let modal = this.modalController.create(TakePicturePage);
    modal.present();
  }


}
