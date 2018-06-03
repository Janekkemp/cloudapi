import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { fireandice } from './api/fireandice';
import { GameThronesComponent } from './GameOfThrones/game-thrones.component';
import { RouterModule } from "@angular/router";
import { HousesComponent } from './Houses/houses.component';
import { BooksComponent } from './Books/books.component';
import { HomeComponent } from './Home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GameThronesComponent,
    HousesComponent,
    BooksComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
    {path: 'character', component: GameThronesComponent},
    {path: 'house', component: HousesComponent},
    {path: 'book', component: BooksComponent}
      
    ]),
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    fireandice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
