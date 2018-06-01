import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { fireandice } from './api/fireandice';
import { GameThronesComponent } from './GameOfThrones/game-thrones.component';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GameThronesComponent,
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
    {path: 'home', component: GameThronesComponent},
      
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
