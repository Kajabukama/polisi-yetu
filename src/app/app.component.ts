import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// main section/pages

import { Msaada } from '../pages/msaada/msaada';
import { Tutorial } from '../pages/tutorial/tutorial';
import { Sheria } from '../pages/sheria/sheria';
import { Silaha } from '../pages/silaha/silaha';

import { PolisiProvider } from "../providers/polisi/polisi";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = Tutorial;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public police: PolisiProvider) {
    this.initializeApp();

    this.pages = [
      { title: 'Msaada', component: Msaada, icon:'call' },
      { title: 'Silaha', component: Silaha, icon:'locate' },
      { title: 'Sheria', component: Sheria, icon:'paper' },
      { title: 'Jifunze', component: Tutorial, icon:'school' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
		this.police.loadAll();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }
}
