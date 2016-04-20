import {Component,Directive,View} from 'angular2/core';
/*import { Router, RouterLink } from 'angular2/router';*/
import {Router, RouterLink, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	selector: 'todo-page',
	templateUrl: 'app/templates/todo.html'
})

export class todoPageComponent {
	constructor(public router: Router) {
	}
}