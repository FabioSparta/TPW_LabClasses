import { Component, OnInit } from '@angular/core';
import {Author} from "../authors/author";
import {AuthorService} from "../authors/author.service";

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {
    author : Author ;

  constructor(private authorService: AuthorService) {
    this.author= new Author(-1,"","");
  }

  ngOnInit(): void {
  }

  createAuthor(author: Author):void {
    this.authorService.createAuthor(author).subscribe()
  }

  goToAuthorsList():void{

  }

}
