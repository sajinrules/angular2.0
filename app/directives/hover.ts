import {Directive,ElementRef} from 'angular2/core';
@Directive({
	selector: 'hover',
	host:{
		'(mouseenter)': 'onMouseEnter()'
	}
})

export class HoverComponent{
	constructor(private el: ElementRef) { }
	private highlightColor = 'red';
	
	onMouseEnter(){
		this._highlight(this.highlightColor); 
	}
	/*onMouseLeave() { this._highlight(null); }*/

	private _highlight(color:string) {
		console.log("color:",color);
		this.el.nativeElement.style.backgroundColor = color;
	}
}