import {Component, View} from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {User}    from './user';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
/*let template = require('templates/login.html');*/

@Component({
	selector: 'home-page'
})
@View({
	templateUrl: 'app/templates/home.html'
})
export class HomePageComponent {
	constructor(public router: Router) {
	}
	
}