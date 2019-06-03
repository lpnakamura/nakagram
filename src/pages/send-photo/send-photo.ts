import { Component, OnInit } from '@angular/core';
import { ViewController, AlertController, NavParams, Slides, LoadingController, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-send-photo',
  templateUrl: 'send-photo.html',
})
export class SendPhotoPage implements OnInit {

  public location = '';
  public photo = '';
  public form: FormGroup;
  private user = '';
  private photos: AngularFireList<any>;


  public selectedFilter: string = 'original';
  public filters: string[] = [
    "original", "_1977",  "aden", "brannan", "brooklyn", "clarendon", "earlybird",
    "gingham", "hudson",  "inkwell", "kelvin", "lark", "lofi",  "maven", "mayfair",
    "moon", "nashville",  "perpetua", "reyes",  "rise",  "slumber",  "stinson",  "toaster",
    "valencia",  "walden",  "willow",
  ];

  constructor(private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth) {}

    ngOnInit(): void {
      this.photo = this.navParams.get('photo');
      this.photos = this.db.list('photos');
      this.photo = this.navParams.get('photo');
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.user = user.email;
        }
      })

      this.form = this.fb.group({
        title: ['', Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(40),
          Validators.required
        ])],
        message: ['', Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(255),
          Validators.required
        ])]
      });
    }


    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((data) => {
          this.location = `${data.coords.latitude},${data.coords.longitude}`;
        }, (err) => {
          const alert = this.alertCtrl.create({
            title: 'Ops, algo deu errado',
            subTitle: 'Não foi possível obter sua localização.',
            buttons: ['OK']
          });
          alert.present();
        });
      }
    }

    dismiss():void {
      this.viewCtrl.dismiss();
    }

    changeFilter(slides:Slides) {
      let currentIndex = slides.getActiveIndex();
      this.selectedFilter = this.filters[currentIndex];
    }

    submit() {
      let loader = this.loadingCtrl.create({ content: "Enviando..." });
      loader.present();

      this.photos.push({
        user: this.user,
        image: this.photo,
        filter: this.selectedFilter,
        location: this.location,
        title: this.form.controls['title'].value,
        message: this.form.controls['message'].value,
        date: firebase.database.ServerValue.TIMESTAMP
      })
      .then(() => {
        loader.dismiss();
        this.navCtrl.setRoot(HomePage);
      })
      .catch((ex) => {
        loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Ops, algo deu errado',
          subTitle: ex,
          buttons: ['OK']
        });
        alert.present();
      });
    }

  }
