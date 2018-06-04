import {Component, OnInit} from '@angular/core';
import {Icharacters,fireandice, Idetail} from '../api/fireandice';
import { Router } from '@angular/router';

@Component({
    selector: 'app-game-thrones',
    templateUrl: './game-thrones.component.html',

})
export class GameThronesComponent implements OnInit{
    
    characters: Icharacters;
    detail: Idetail
    pagenumber: number = 1;
    
    constructor(private _api : fireandice, private char: fireandice, private search: fireandice){}

    ngOnInit() {
        this. _api.getCharacters(this.pagenumber).subscribe(result => this.characters = result);
    
    }

    btnclick(character: string) : void{
       this.char.getcharacter(character).subscribe(result => this.detail = result);
     
         
    }
 
    Adjustpages() : void{
        this.pagenumber++;
        this. _api.getCharacters(this.pagenumber).subscribe(result => this.characters = result);
    }
    Previous(): void{
        this.pagenumber--;
        this._api.getCharacters(this.pagenumber).subscribe(result => this.characters = result);
    }
}