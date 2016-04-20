import {Component,View} from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {User}    from '../model/user';
import {authService} from '../services/auth.service';
@Component({
	selector: 'register-page'
})
@View({
	templateUrl : 'app/templates/register.html'
})
export class RegisterPageComponent {
	//public hero: Hero;
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