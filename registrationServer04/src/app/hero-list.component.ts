import { Component } from '@angular/core';

//import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector:'hero-list',
  template:`
    <div *ngFor="let hero of heroes">
      {{hero.id}}-{{hero.name}}
    </div>
  `
})

export class HeroListComponent{
//heroes = HEROES;

  heroes:Hero[];    //声明heroes变量为Hero类型的数组
  constructor(heroService:HeroService){
    this.heroes = heroService.getHeroes();
  }
}