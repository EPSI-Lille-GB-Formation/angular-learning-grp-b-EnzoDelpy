import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  id: number | undefined;
  book: Book | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }
}
