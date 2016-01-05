import {Component} from 'angular2/core';

@Component({
	selector: 'login-page',
	template: `
		<h4>Login</h4>
		<div class="row">
			<form>
				<div class="row">
					<div class="input-field col s12">
						<input id="first_name" type="text" class="validate">
						<label for="first_name">Email</label>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<input id="password" type="password" class="validate">
						<label for="password">Password</label>
					</div>
				</div>
			</form>
		</div>
	`
})
export class LoginPageComponent {
	//public hero: Hero;
}