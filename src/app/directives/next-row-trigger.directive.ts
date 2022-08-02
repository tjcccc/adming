import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[admingNextRowTrigger]'
})
export class NextRowTriggerDirective {

  constructor() { }

  @HostListener('mouseenter') onmouseenter = () => {};

}
