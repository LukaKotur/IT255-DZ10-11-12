import { Component, Directive } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {SearchPipe} from '../pipe/search';
import 'rxjs/Rx';


@Component({
	pipes: [SearchPipe],
	selector: 'MainPage',
	templateUrl: 'app/mainpage/mainpage.html'
})

export class MainPageComponent {
	name: String = "";
	sobe: Object[];
	constructor(http: Http) {
		http.get('sobe.json')
			.map(res => res.json())
			.subscribe(sobe => this.sobe = sobe);
	}
}

