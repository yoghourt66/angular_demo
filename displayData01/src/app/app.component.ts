import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1,'Windstorm'),
    new Hero(13,'Bombasto'),
    new Hero(15,'Magneta'),
    new Hero(20,'Tornado')
  ];
  myHero = this.heroes[0];
}
