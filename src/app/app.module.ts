import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './MyComponents/searchbar/searchbar.component';
import { WeathercardComponent } from './MyComponents/weathercard/weathercard.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    WeathercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
