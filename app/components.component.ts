import {Component,Directive,View} from 'angular2/core';
/*import { Router, RouterLink } from 'angular2/router';*/
import {Router, RouterLink, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	selector: 'component-page',
	templateUrl: 'app/templates/components.html'
})

export class componentPageComponent {
	constructor(public router: Router) {
	}
}