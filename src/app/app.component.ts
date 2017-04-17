import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/pages';
import { Http } from '@angular/http';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, http: Http) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // http
    //     .get('8213891238123/billingletters/')
    //     .map(res =>  res.json())
    //     .subscribe(billingLetters => {
    //         this.billingLetters = billingLetters;
    //         console.log(this.billingLetters);
    //     }, erro => console.log(erro));

  }
}
