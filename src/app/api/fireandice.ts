import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class fireandice{
    constructor(private _http: HttpClient) {}

    getCharacters(): Observable<Icharacters> {
        return this._http.get<Icharacters>("https://www.anapioficeandfire.com/api/characters?pageSize=80")
    }

    getcharacter(details:string) : Observable<Idetail>
    {
        return this._http.get<Idetail>(details)
        // .do(data => console.log(JSON.stringify(data)));
    }


}


export interface Icharacters {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}
export interface Idetail {
    url: string;
    name: string;
    gender: string;
    culture: string;
    born: string;
    died: string;
    titles: string[];
    aliases: string[];
    father: string;
    mother: string;
    spouse: string;
    allegiances: any[];
    books: string[];
    povBooks: any[];
    tvSeries: string[];
    playedBy: string[];
}
