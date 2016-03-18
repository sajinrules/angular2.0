import {Component,View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {LoginPageComponent} from './login.component';
import {RegisterPageComponent} from './register.component';
import {HomePageComponent} from './home.component';
import {isLoggedIn} from './services/auth.service';

@Component({
	selector: 'my-app',
})
@View({
	directives: [ROUTER_DIRECTIVES, LoggedInRouterOutlet],
	templateUrl: 'app/templates/navbar.html'
})
@RouteConfig([
	{ path:'/', name:'Login',component:LoginPageComponent,useAsDefault: true},
	{ path:'/register', name:'Register', component:RegisterPageComponent},
	{ path:'/home', name: 'Home', component:HomePageComponent },
	{aux:'/auxRoute', name: 'AuxPath', component: RegisterPageComponent}
])
export class AppComponent{
	isLoggedIn: bool = false;
	constructor() {
		this.isLoggedIn = isLoggedIn;
		console.log("isLoggedIn:",isLoggedIn);
	}
	
}


