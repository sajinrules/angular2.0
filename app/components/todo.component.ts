import {Component,Directive,View} from 'angular2/core';
import { TodoListComponent } from './todo-list.component';
import {Router, RouterLink, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	selector: 'todo-page',
	templateUrl: 'app/templates/todo.html',
	directives: [TodoListComponent]
})

export class todoPageComponent {
	todoText : string;
	list: string []=[];
	constructor(public router: Router) {
	}
	onAdd(text){
		console.log("text:",text.value);
		this.list.push(text.value);
		text.value='';
	}
}