import { Directive, ElementRef, Renderer, Renderer2, asNativeElements, HostListener } from '@angular/core';

@Directive({
  selector: '[appCotted]'
})
export class CottedDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('blur') onBlur() {
    this.changeColor('orange');
  }

  changeColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);

  }

}
