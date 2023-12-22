import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  bgColor = '';

  @Input('bg-color')
  bgHighlightColor = 'yellow';

  @Input('default-color')
  bgDefaultColor = '';

  constructor() {}

  ngAfterViewInit() {
    this.bgColor = this.bgDefaultColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.bgHighlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = this.bgDefaultColor;
  }
}
