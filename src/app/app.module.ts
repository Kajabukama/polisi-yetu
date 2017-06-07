import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';

import { OfficerService } from '../providers/officers';

import { MyApp } from './app.component';
import { Tutorial } from '../pages/tutorial/tutorial';

// main sections

import { Msaada } from '../pages/msaada/msaada';
import { Sheria } from '../pages/sheria/sheria';
import { Silaha } from '../pages/silaha/silaha';

// tabs section
import { About } from '../pages/about/about';
import { Tabs } from '../pages/tabs/tabs';
import { DetailsPage } from "../pages/details/details";
import { CategoryPage } from "../pages/category/category";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PolisiProvider } from '../providers/polisi/polisi';



@NgModule({
  declarations: [
    MyApp, Tutorial, Tabs, About, Silaha, Sheria, Msaada, DetailsPage, CategoryPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, Tutorial, Tabs, About, Silaha, Sheria, Msaada, DetailsPage,CategoryPage
  ],
  providers: [
	  Storage,
    OfficerService,
    StatusBar,
    SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler },
    PolisiProvider
  ]
})
export class AppModule { }
