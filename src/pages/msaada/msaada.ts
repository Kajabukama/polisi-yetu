import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CategoryPage } from "../category/category";

import { PolisiProvider } from "../../providers/polisi/polisi";

@Component({
  selector: 'page-msaada',
  templateUrl: 'msaada.html',
})

export class Msaada {

	public msaada: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public polisi: PolisiProvider) {

			this.msaada = this.polisi.all;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad Msaada');
	}

	details(id){
		this.navCtrl.push(CategoryPage, {id:id});
	}



}
