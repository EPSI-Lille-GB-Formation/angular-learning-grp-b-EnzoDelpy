import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[no-open]',
  standalone: true,
})
export class NoOpenDirective {
  @HostBinding('style.pointer-events')
  pointerEvents = 'none';

  constructor() {}
}
