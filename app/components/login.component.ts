import {Component,View} from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {User}    from './user';
import {authService} from '../services/auth.service';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
	selector: 'login-page',
	providers:[authService]
})
@View({
	templateUrl: 'app/templates/login.html'
})
export class LoginPageComponent {
	constructor(public router: Router,private _authService: authService) {
	}
	submitted = false;
	user = new User();
	onSubmit(){ 
		if(this.user.email==="sajinrules@gmail.com" && this.user.password==="sajin"){
			this.submitted = true; 
			this._authService.setStatus(true);
			this.router.parent.navigateByUrl('/home');
		}
	}
}