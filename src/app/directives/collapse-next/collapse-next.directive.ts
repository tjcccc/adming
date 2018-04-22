import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCollapseNext]'
})
export class CollapseNextDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mousedown') onmousedown() {
    this.collapseNext();
  }

  private switchIcon(openIcon: any, foldedIcon: any, isOpen: boolean) {
    if (openIcon && foldedIcon) {
      openIcon.style.display = isOpen ? 'inline' : 'none';
      foldedIcon.style.display = isOpen ? 'none' : 'inline';
    }
  }

  private collapseNext() {

    const sibling = this.el.nativeElement.nextElementSibling;
    const openIcon = this.el.nativeElement.children.namedItem('open-icon');
    const foldedIcon = this.el.nativeElement.children.namedItem('folded-icon');

    console.log(this.el);

    if (sibling) {
      const nextLevelStyle = this.el.nativeElement.nextElementSibling.style;
      if (nextLevelStyle.display === 'none') {
        nextLevelStyle.display = 'block';
        if (openIcon && foldedIcon) {
          openIcon.style.display = 'inline';
          foldedIcon.style.display = 'none';
        }
      } else {
        nextLevelStyle.display = 'none';
        if (openIcon && foldedIcon) {
          openIcon.style.display = 'none';
          foldedIcon.style.display = 'inline';
        }
      }
    }

  }

}
