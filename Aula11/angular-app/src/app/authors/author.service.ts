import { Injectable } from '@angular/core';

import {Author} from "./author";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient,HttpHeaders} from "@angular/common/http";


const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthorService {
  private baseUrl = 'http://127.0.0.1:8000/api/'
  constructor(private http: HttpClient) {  }

  getAuthor(id: number): Observable<Author>{
    const url = this.baseUrl + 'author?id=' + id;
    return this.http.get<Author>(url)
  }

  getAuthors(): Observable<Author[]>{
    const url = this.baseUrl + 'authors';
    return this.http.get<Author[]>(url);
  }

  getAuthorsN(num:number): Observable<Author[]>{
    const url = this.baseUrl + 'authors?num=' + num;
    return this.http.get<Author[]>(url);
  }

  createAuthor(au: Author | undefined): Observable<any>{
    const url = this.baseUrl + 'authorcre' ;
    return this.http.post(url,au,httpOptions)
  }

  updateAuthor(au:Author): Observable<any>{
    const url = this.baseUrl + 'authorupd' ;
    return this.http.put(url,au,httpOptions)
  }

  deleteAuthor(au:Author): Observable<any>{
    const url = this.baseUrl + 'authordel/' + au.id ;
    return this.http.delete(url,httpOptions)
  }
}


