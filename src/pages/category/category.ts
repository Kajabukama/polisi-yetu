import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PolisiProvider } from "../../providers/polisi/polisi";

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})

export class CategoryPage {

	public id:number;
	public cat:any;
	public selected: any;

	public name: any;
	public comm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public police:PolisiProvider) {
	  this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
	this.find(this.id);
	this.name = this.cat.name;
	this.comm = this.cat.contact;
  }

  find(id){
	this.police.all.filter((item) => {
		if(item.id === id){
			console.log(item)
			this.cat = item;
		}
	})
  }

}
