import {Component,Directive,View,Input} from 'angular2/core';
/*import { Router, RouterLink } from 'angular2/router';*/
import {Router, RouterLink, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	selector: 'todo-list',
	templateUrl: 'app/templates/todo-list.html'
})

export class TodoListComponent {
	
	constructor(public router: Router) {
	}
	@Input() 
  		todos: String[];
}