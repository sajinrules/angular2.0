import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginPageComponent} from './login.component';
import {RegisterPageComponent} from './register.component';
@Component({
	selector: 'my-app',
	template: `
		<nav>
			<div class="nav-wrapper teal" >
				<a style="margin: 0px 20px;" class="brand-logo">Angular 2.0 Beta</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><a [routerLink]="['Login']">Login</a></li>
					<li><a [routerLink]="['Register']">Register</a></li>
				</ul>
			</div>
		</nav>
		<div class="container">
			<router-outlet></router-outlet>
      	</div>
	`,
	directives: [ROUTER_DIRECTIVES]
	
})
@RouteConfig([
	{path: '/',name: 'Login',component: LoginPageComponent,useAsDefault: true},
	{path: '/register',   name: 'Register',component: RegisterPageComponent}
])
export class AppComponent{
	
}


