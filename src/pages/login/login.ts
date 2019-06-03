import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private alertCtrl: AlertController) {}

    ngOnInit(): void {
      this.form = this.fb.group({
        email:['', Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(160),
          Validators.required,
          Validators.email
        ])],
        password:['', Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required
        ])]
      });

      this.afAuth.authState
      .subscribe((user) =>
        {
          if(user) {
            this.gotoHome();
          }
        });
    }

    submit():void{
      let loader = this.loadingCtrl.create({content: 'Autenticando...'});
      loader.present();

      const userName = this.form.controls['email'].value;
      const password = this.form.controls['password'].value;

      const alertError = this.alertCtrl.create({
        title:'Ops, algo deu errado!',
        subTitle:'Não foi possível realizar seu login',
        buttons: [{
          text: 'Ok',
          handler: () => {
            loader.dismiss();
          }
        }]
      })

      const alertSucess = this.alertCtrl.create({
        title:'Deu tudo certo!',
        subTitle:'Seu login foi realizado com sucesso',
        buttons: [{
          text: 'Ok',
          handler: () => {
            loader.dismiss();
          }
        }]
      })

      this.afAuth.auth
      .signInWithEmailAndPassword(userName, password)
      .then(() => {
        alertSucess.present();
        this.gotoHome();
      })
      .catch(() => alertError.present())
    }

    gotoSignUp():void{
      this.navCtrl.setRoot(SignupPage);
    }

    private gotoHome():void{
      this.navCtrl.setRoot(HomePage);
    }
  }
