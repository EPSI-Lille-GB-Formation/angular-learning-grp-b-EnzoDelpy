import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Users } from './mock-user';
import { Books } from './mock-book';
import { Categories } from './mock-categorie';
import { Pages } from './mock-page';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const user = Users;
    const book = Books;
    const categorie = Categories;
    const page = Pages;
    return {user, book, categorie, page};
  }
}
