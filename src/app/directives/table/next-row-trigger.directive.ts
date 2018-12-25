import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNextRowTrigger]'
})
export class NextRowTriggerDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onmouseenter = () => {

  }

}
