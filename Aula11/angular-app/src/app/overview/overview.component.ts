import { Component, OnInit } from '@angular/core';
import {Author} from "../authors/author";
import {AUTHORS} from "../authors/authorslist";
import {AuthorService} from "../authors/author.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  authors: Author[] | undefined

  constructor(private authorService: AuthorService) {
  }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() : void {
    this.authorService.getAuthorsN(4).subscribe(authors => this.authors = authors)
  }
}
