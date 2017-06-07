import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OfficerService } from '../../providers/officers';

@IonicPage()

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})

export class DetailsPage {

	public id: number;
	public selected: any;
	public off: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public officer: OfficerService) {

		this.id = this.navParams.get('id');
		this.find(this.id);
		console.log(this.selected);
	}

	ionViewDidLoad() {

		this.selected.forEach((item) => {
			console.log(item);
		})
	}

	find(id){
		this.selected = this.officer.getOfficer(id);
	}

}
