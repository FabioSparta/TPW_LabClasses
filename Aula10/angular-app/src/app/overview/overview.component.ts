import { Component, OnInit } from '@angular/core';
import {Author} from "../authors/author";
import {AUTHORS} from "../authors/authorslist";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  authors: Author[]

  constructor() {
    this.authors = AUTHORS.slice(0,4);
  }

  ngOnInit(): void {
  }

}
