import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { App  } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  user: string;

  constructor(private app: App,private afAuth: AngularFireAuth) {}

  ngOnInit(): void {
      this.afAuth.authState.subscribe((user) =>{
        if(user){
          this.user = user.email;
        }
      });
  }

  signOut():void{
    this.afAuth.auth.signOut();
    this.app.getRootNav().setRoot(LoginPage);
  }
}
