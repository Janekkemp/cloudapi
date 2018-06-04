import {Component, OnInit} from '@angular/core';
import {IHPchar, harrypotter, IHPspell} from '../api/harrypotter';
import { Router } from '@angular/router';

@Component({
    selector: 'app-potter',
    templateUrl: './potter.component.html',

})
export class PotterComponent implements OnInit{
    
    characters : IHPchar;
    spells: IHPspell
  
    
    constructor(private _api : harrypotter, private spell: harrypotter, private sort: harrypotter){}
    
    ngOnInit() {
        this. _api.getCharacters().subscribe(result => this.characters = result);
        this.spell.getSpells().subscribe(result => this.spells = result);
    }


    Sort(){
        this._api.sortcharacters().subscribe(result => this.characters = result);

    }
    
    Search(name: string){
        this.spell.searchspell(name).subscribe(result => this.spells = result);
    }
    
   
}