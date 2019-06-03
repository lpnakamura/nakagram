import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ModalController, LoadingController } from 'ionic-angular';
import { ShowMapPage } from '../show-map/show-map';

@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html'
})
export class PhotosPage implements OnInit {
  public photos : any[];

  constructor(private db: AngularFireDatabase, private modalCtrl: ModalController, private loadingCtrl: LoadingController) { }

  ngOnInit(): void {
    const loader = this.loadingCtrl.create({ content: "Carregando fotos..." });
    loader.present();

    this.db.list('photos').valueChanges().subscribe((photos) => {
      this.photos = photos;
      loader.dismiss();
    });
  }

  showMap(location) {
    let modal = this.modalCtrl.create(ShowMapPage, { location: location });
    modal.present();
  }
}
