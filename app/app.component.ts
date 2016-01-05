import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
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
	directives: [HeroDetailComponent,ROUTER_DIRECTIVES],
	providers: [HeroService]
	
})
@RouteConfig([
	{path: '/',name: 'Login',component: LoginPageComponent,useAsDefault: true},
	{path: '/register',   name: 'Register',component: RegisterPageComponent}
])
export class AppComponent implements OnInit {
	public title = 'Tour of Heroes';
	public heroes: Hero[];
	public selectedHero: Hero;

	constructor(private _heroService: HeroService) { }

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) { this.selectedHero = hero; }
}


