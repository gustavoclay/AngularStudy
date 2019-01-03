import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({selector: '[appDarkOnHover]'})
export class DarkOnHoverDirective {
    constructor(private el: ElementRef, private render: Renderer2) {
    }

    @Input() brightness = '80%';

    @HostListener('mouseover')
    darkenOn() {
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOf() {
        this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}
