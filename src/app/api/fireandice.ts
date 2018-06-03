import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class fireandice{
    constructor(private _http: HttpClient) {}

    getCharacters(pages: number): Observable<Icharacters> {
        return this._http.get<Icharacters>(`https://www.anapioficeandfire.com/api/characters?pageSize=40&page=${pages}`)
    }

    getcharacter(details:string) : Observable<Idetail>
    {
        return this._http.get<Idetail>(details)
        // .do(data => console.log(JSON.stringify(data)));
    }

    getHouses(pages: number): Observable<Ihouses>{
        return this._http.get<Ihouses>(`https://www.anapioficeandfire.com/api/houses?page=${pages}&pageSize=30`);

    }
    
   
    getBooks(): Observable<Ibooks>{
        return this._http.get<Ibooks>("https://www.anapioficeandfire.com/api/books/");

    }
    getbook(id: string): Observable<Ibookfind>{
        return this._http.get<Ibookfind>(`https://www.anapioficeandfire.com/api/books/${id}`);
        
    }


}


export interface Ibookfind{
    url: string;
    name: string;
    isbn: string;
    authors: string[];
    numberOfPages: number;
    publisher: string;
    country: string;
    mediaType: string;
    released: Date;
    characters: string[];
    povCharacters: string[];
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
export interface Ihouses {
    url: string;
    name: string;
    region: string;
    coatOfArms: string;
    words: string;
    titles: string[];
    seats: string[];
    currentLord: string;
    heir: string;
    overlord: string;
    founded: string;
    founder: string;
    diedOut: string;
    ancestralWeapons: string[];
    cadetBranches: string[];
    swornMembers: string[];
}
export interface Ibooks {
    url: string;
    name: string;
    isbn: string;
    authors: string[];
    numberOfPages: number;
    publisher: string;
    country: string;
    mediaType: string;
    released: Date;
    characters: string[];
    povCharacters: string[];
}

