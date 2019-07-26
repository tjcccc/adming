import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[admingNextRowTrigger]'
})
export class NextRowTriggerDirective {

  constructor() { }

  @HostListener('mouseenter') onmouseenter = () => {

  }

}
