import {Component,View} from 'angular2/core';
import {Router, RouterLink, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {LoginPageComponent} from './login.component';
import {RegisterPageComponent} from './register.component';
import {HomePageComponent} from './home.component';
import {authService} from '../services/auth.service';

@Component({
	selector: 'my-app',
	providers:[authService]
})
@View({
	directives: [ROUTER_DIRECTIVES, LoggedInRouterOutlet],
	templateUrl: 'app/templates/navbar.html'
})
@RouteConfig([
	{ path:'/', name:'Login',component:LoginPageComponent,useAsDefault: true},
	{ path:'/register', name:'Register', component:RegisterPageComponent},
	{ path:'/home/...', name: 'Home', component:HomePageComponent }
])
export class AppComponent{
	isLoggedIn: bool = false;
	constructor(public router: Router,private _authService: authService) {
		this._authService= _authService;
		this.router=router;
	}
	
	logout(){
		/*console.log("logout");*/
		this._authService.setStatus(false);
		/*console.log("this.router:",this.router);*/
		this.router.navigateByUrl('/');
		
	} 
}


