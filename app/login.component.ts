import {Component,View} from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';
import {NgForm}    from 'angular2/common';
import {User}    from './user';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
/*let template = require('templates/login.html');*/

@Component({
	selector: 'login-page'
})
@View({
	templateUrl: 'app/templates/login.html'
})
export class LoginPageComponent {
	constructor(public router: Router) {
	}
	submitted = false;
	user = new User();
	onSubmit(){ 
		console.log("this.router.parent:",this.router);
		return;
		console.log("this.user:",this.user);
		//let credential ={email="sajinrules@gmail.com",password="sajin"};
		if(this.user.email==="sajinrules@gmail.com" && this.user.password==="sajin"){
			localStorage.setItem("jwt","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
			this.submitted = true; 
			this.router.parent.navigateByUrl('/home');
		}
		
	}
}