import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class OfficerService {

  officers: any;

  constructor(public http: Http) {
    this.officers = [
      {
			id:1,
        	name: 'Yusuph H. Kajabukama',
        	title: 'Inspector General',
        	division: 'Makosa jinai mkoa wa Temeke',
        	station: 'Dar es salaam',
        	mobile: '+255714744735',
        	avatar: 'kajabukama.jpg'
      },
      {
			id:2,
			name: 'Joseph F. Shirima',
			title: 'Coplo Constable',
			division: 'Madawa ya Kulevya',
			station: 'Temeke',
			mobile: '+255714744735',
			avatar: 'focus.jpg'
      },
      {
			id:3,
			name: 'Ishengoma M. Tibaigana',
			title: 'Commissioner General',
			division: 'Operesheni Tokomeza',
			station: 'Makao Makuu Polisi',
			mobile: '+255714744735',
			avatar: 'focus.jpg'
      },
      {
			id:4,
			name: 'Hamisa T. Mkomwa',
			title: 'Ispekta General',
			division: 'Jinsia na Watoto',
			station: 'Makao Makuu Polisi',
			mobile: '+255714744735',
			avatar: 'focus.jpg'
      }
    ];
  }

  filterOfficers(searchTerm) {
    return this.officers.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  getOfficer(id) {
    return this.officers.filter((item) => {
      return item.id == id;
    });

  }



}
