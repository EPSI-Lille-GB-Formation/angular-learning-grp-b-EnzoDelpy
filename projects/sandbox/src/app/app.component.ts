import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { NoOpenDirective } from './no-open.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective, NoOpenDirective],
  template: `
    <h1>Découverte des directives d'attributs</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
      perspiciatis eos vitae magnam sed beatae fugiat maxime molestiae rerum
      pariatur, corrupti fugit veritatis reiciendis culpa iste, debitis commodi
      ad.
    </p>
    <p highlight bg-color="blue" default-color="yellow">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
      perspiciatis eos vitae magnam sed beatae fugiat maxime molestiae rerum
      pariatur, corrupti fugit veritatis reiciendis culpa iste, debitis commodi
      ad.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempora
      perspiciatis eos vitae magnam sed beatae fugiat maxime molestiae rerum
      pariatur, corrupti fugit veritatis reiciendis culpa iste, debitis commodi
      ad.
    </p>
    <a href="https://www.google.com" no-open>lien</a>
  `,
  styles: [],
})
export class AppComponent {
  title = 'sandbox';
}
