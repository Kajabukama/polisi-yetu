import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { About } from '../about/about';
import { Sheria } from '../sheria/sheria';
import { Msaada } from '../msaada/msaada';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {

  tab1Root: any = About;
  tab2Root: any = Sheria;
  tab3Root: any = Msaada;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }


}
