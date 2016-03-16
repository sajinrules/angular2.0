import {Component,Directive,View} from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {User}    from './user';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {HoverComponent} from './directives/hover'
/*let template = require('templates/login.html');*/

/*@Component({
	selector: 'home-page',
})*/
/*@Directive({
  selector:'[HoverComponent]'
}) */  
/*@View({
	templateUrl: 'app/templates/home.html'
})*/
@Component({
	selector: 'home-page',
	templateUrl: 'app/templates/home.html',
	directives: [HoverComponent]
})
export class HomePageComponent {
	constructor(public router: Router) {
	}
	onClick(event:KeyboardEvent) {
		console.log("event:",event);
	}
	
}