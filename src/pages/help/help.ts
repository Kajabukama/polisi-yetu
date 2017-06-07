import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/debounceTime';

import { OfficerService } from '../../providers/officers';
import { DetailsPage } from "../details/details";

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})

export class Help {

  searchTerm: string = '';
  searchControl: FormControl;
  officers: any;
  searching: any = false;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public officer: OfficerService,
      public loadingCtrl: LoadingController
  )
  {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {

    this.setFilteredOfficers();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredOfficers();
    });
  }

  onSearchInput() {
    this.searching = true;
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  setFilteredOfficers() {
    this.officers = this.officer.filterOfficers(this.searchTerm);
  }

  details(id){
	  this.navCtrl.push(DetailsPage, {id:id})
  }

}
