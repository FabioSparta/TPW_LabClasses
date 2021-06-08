import {Component, Input, OnInit} from '@angular/core';
import {Author} from "../authors/author";

import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AuthorService} from "../authors/author.service";

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  @Input() author: Author ;

  constructor(private route:ActivatedRoute, private location:Location, private authorService: AuthorService)
  { this.author= new Author(-1,"name","email")}

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor():void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthor(id).subscribe(author => this.author=author)
  }

  update():void {
    this.authorService.updateAuthor(this.author).subscribe(() => this.goBack())
  }

  delete():void {
    this.authorService.deleteAuthor(this.author).subscribe(() => this.goBack())
  }

  goBack():void{
    this.location.back();
  }
}

