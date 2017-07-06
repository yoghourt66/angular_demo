import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';
import { Logger } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
