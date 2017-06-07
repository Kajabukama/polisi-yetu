import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// 02B875
// 0715-705 866

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class About {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad About');
  }

}
