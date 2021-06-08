import {Component, Input, OnInit} from '@angular/core';
import {Author} from "../authors/author";

import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AUTHORS} from "../authors/authorslist";

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  @Input() author: Author | undefined;

  constructor(private route:ActivatedRoute, private location:Location)
  { this.author= new Author(0,"name","email")}

  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor():void {
    // @ts-ignore
    const num = +this.route.snapshot.paramMap.get('num');
    this.author =AUTHORS.find(author => author.num === num);

  }

  goBack():void{
    this.location.back();
  }
}

