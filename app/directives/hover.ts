import {Directive,ElementRef} from 'angular2/core';
@Directive({
	selector: 'hover',
	host:{
		'(mouseenter)': 'onMouseEnter()'
	}
})

export class HoverComponent{
	constructor(private el: ElementRef) { }
	private _defaultColor = 'red';
	
	onMouseEnter(){
		this._highlight(this.highlightColor || this._defaultColor); 
	}
	/*onMouseLeave() { this._highlight(null); }*/

	private _highlight(color:string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}