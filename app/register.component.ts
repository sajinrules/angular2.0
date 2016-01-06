import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { User }    from './user';
@Component({
	selector: 'register-page',
	template: `
		<h4>Register</h4>
		<div class="row">
			<form (ngSubmit)="onSubmit()" #loginForm="ngForm">
				<div class="row">
					<div class="input-field col s12">
						<input id="email" type="email" class="validate" [(ngModel)]="user.email" ngControl="email" #email="ngForm" required>
						<label for="first_name">Email</label>
						<div [hidden]="email.valid" class="alert alert-danger">
							Email is required
						</div>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<input id="password" type="password" class="validate" [(ngModel)]="user.password" ngControl="password" #password="ngForm" required>
						<label for="password">Password</label>
						<div [hidden]="password.valid" class="alert alert-danger">
							Password is required
						</div>
					</div>
				</div>
				<button class="btn waves-effect waves-light" type="submit" name="action"  [disabled]="!loginForm.form.valid">Register
					<i class="material-icons right">send</i>
				</button>
			</form>
		</div>
	`
})
export class RegisterPageComponent {
	//public hero: Hero;
	submitted = false;
	user = new User();
}