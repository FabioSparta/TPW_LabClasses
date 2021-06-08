import {Author} from "../authors/author";

export class Book{
  num: number;
  title: string;
  author: Author;

  constructor(num: number, title:string, author:Author) {
    this.num= num;
    this.title=title;
    this.author=author;
  }
}
