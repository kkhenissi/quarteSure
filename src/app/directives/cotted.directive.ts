import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCotted]'
})
export class CottedDirective {

  constructor(private el: ElementRef, private renderer2: Renderer2) { }

  @HostListener('blur') onBlur() {
    this.changeColor('orange');
  }

  changeColor(color: string) {
    this.renderer2.setStyle(this.el.nativeElement, 'color', color);

  }

}
