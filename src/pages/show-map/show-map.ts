import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController} from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'page-show-map',
  templateUrl: 'show-map.html'
})
export class ShowMapPage implements OnInit {
  public location: string;
  public iframe: SafeResourceUrl;

  constructor(private navParams: NavParams, private viewCtrl: ViewController, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.location = this.navParams.get('location');
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
