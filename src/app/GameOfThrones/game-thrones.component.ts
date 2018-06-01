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
    
    constructor(private _api : fireandice, private char: fireandice){}

    ngOnInit() {
     this._api.getCharacters()
              .subscribe(result => this.characters = result);
    }

    btnclick(character: string) : void{
       this.char.getcharacter(character).subscribe(result => this.detail = result);

    }
}