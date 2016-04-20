import {Component,View} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {User}    from '../model/user';
@Component({
	selector: 'register-page'
})
@View({
	templateUrl : 'app/templates/register.html'
})
export class RegisterPageComponent {
	//public hero: Hero;
	submitted = false;
	user = new User();
}