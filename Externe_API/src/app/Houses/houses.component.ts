import {Component, OnInit} from '@angular/core';
import {Icharacters,fireandice, Idetail, Ihouses} from '../api/fireandice';
import { Router } from '@angular/router';

@Component({
    selector: 'app-houses',
    templateUrl: './houses.component.html',

})
export class HousesComponent implements OnInit{
    
    houses: Ihouses;
    detail: Idetail
    pagenumber: number =0;
  
    
    constructor(private _api : fireandice, private char: fireandice){}

    ngOnInit() {
        this. _api.getHouses(this.pagenumber).subscribe(result => this.houses = result);
    
    }

    btnclick(character: string) : void{
       this.char.getcharacter(character).subscribe(result => this.detail = result);

    }

    Adjustpages() : void{
        this.pagenumber++;
        this. _api.getHouses(this.pagenumber).subscribe(result => this.houses = result);
    }
    Previous(): void{
        this.pagenumber--;
        this._api.getHouses(this.pagenumber).subscribe(result => this.houses = result);
    }
   
}