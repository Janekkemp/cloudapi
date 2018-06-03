import {Component, OnInit} from '@angular/core';
import {Icharacters,fireandice, Idetail, Ihouses, Ibooks, Ibookfind} from '../api/fireandice';
import { Router } from '@angular/router';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',

})
export class BooksComponent implements OnInit{
    
    books: Ibooks;
    book: Ibookfind;
    
  
    
    constructor(private _api : fireandice, private char: fireandice){}
    
    ngOnInit() {
        this. _api.getBooks().subscribe(result => this.books = result);
    
    }

  
    Findbook(book: string){
        this.char.getbook(book).subscribe(result => this.book = result);
    }
   
}