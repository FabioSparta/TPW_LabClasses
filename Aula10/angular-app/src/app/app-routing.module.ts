import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorsComponent} from "./authors/authors.component";
import {OverviewComponent} from "./overview/overview.component";
import {AuthorDetailsComponent} from "./author-details/author-details.component";
import {BooksComponent} from "./books/books.component";

const routes: Routes = [
  {path:'authors', component:AuthorsComponent},
  {path: 'overview', component:OverviewComponent},
  {path: 'authordetails/:num', component:AuthorDetailsComponent},
  {path: 'books', component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
