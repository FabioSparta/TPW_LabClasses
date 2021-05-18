import { Component, OnInit } from '@angular/core';
import {BOOKS} from "./bookslist";
import {Book} from "./book";
import {Author} from "../authors/author";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  selectedBook: Book | undefined

  constructor() {
    this.books=BOOKS;
  }

  onSelect(book:Book): void {
    this.selectedBook = book
  }

  ngOnInit(): void {
  }

}
