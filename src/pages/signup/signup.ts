import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {
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
    }

    submit():void{
      let loader = this.loadingCtrl.create({content: 'Cadastrando...'});
      loader.present();

      const userName = this.form.controls['email'].value;
      const password = this.form.controls['password'].value;

      const alertError = this.alertCtrl.create({
        title:'Ops, algo deu errado!',
        subTitle:'Não foi possível realizar seu cadastro',
        buttons: ['OK']
      })

      const alertSucess = this.alertCtrl.create({
        title:'Deu tudo certo!',
        subTitle:'Seu cadastro foi realizado com sucesso',
        buttons: ['OK']
      })

      this.afAuth.auth
      .createUserWithEmailAndPassword(userName, password)
      .then(() => {
        loader.dismiss();
        alertSucess.present();
        this.gotoLogin();
      })
      .catch(() => alertError.present())
    }

    gotoLogin():void{
      this.navCtrl.setRoot(LoginPage);
    }
  }
