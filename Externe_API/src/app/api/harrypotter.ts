import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class harrypotter{

    constructor(private _http: HttpClient) { }
   
    getCharacters(): Observable<IHPchar> {
        let headers = new HttpHeaders()
        .set('Access-Control-Allow-Origin','*')
        .set('Access-Control-Allow-Methods', 'GET, PUT, POST'); 
        return this._http.get<IHPchar>("http://localhost:5000/api/v1/characters", {headers: headers});

    }
    getSpells(): Observable<IHPspell> {
        let headers = new HttpHeaders()
        .set('Access-Control-Allow-Origin','*')
        .set('Access-Control-Allow-Methods', 'GET, PUT, POST'); 
        return this._http.get<IHPspell>("http://localhost:5000/api/v1/spells", {headers: headers});

    }  

    sortcharacters(): Observable<IHPchar> {
        let headers = new HttpHeaders()
        .set('Access-Control-Allow-Origin','*')
        .set('Access-Control-Allow-Methods', 'GET, PUT, POST'); 
        return this._http.get<IHPchar>("http://localhost:5000/api/v1/characters?sort=name", {headers: headers});

    }

    searchspell(name: string): Observable<IHPspell> {
        let headers = new HttpHeaders()
        .set('Access-Control-Allow-Origin','*')
        .set('Access-Control-Allow-Methods', 'GET, PUT, POST'); 
        return this._http.get<IHPspell>(`http://localhost:5000/api/v1/spells?name=${{name}}`, {headers: headers});


    }
    
    



}

export interface IHPchar {
    id: number;
    name: string;
    firstName: string;
    house: string;
}
export interface IHPspell{
    id: number;
    name: string;
    effect: string;
}




