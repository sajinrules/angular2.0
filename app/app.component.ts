import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
    template: `
		<h1>{{title}}</h1>
		<ul>
		<li *ngFor="#hero of heroes">
			<span class="badge">{{hero.id}}</span> {{hero.name}}
		</li>
		</ul>
	`,
	
})
export class AppComponent{
	public title = 'Tour of Heroes';
	public heroes = HEROES;
}


var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];