import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PolisiProvider {

	public all: any;

	constructor(public http: Http) {
		console.log('Hello PolisiProvider Provider');
	}

	loadAll(){
		this.http.get('assets/data/polisi.json')
		.map((response) => response.json())
		.subscribe((res) => {
			this.all = res;
			console.log(res);
		})
	}

}
