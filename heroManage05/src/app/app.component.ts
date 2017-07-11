import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';


@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    
    <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero===selectedHero">
            <!--each hero goes here-->
            <span class="badge">{{hero.id}}</span>{{hero.name}}
        </li>
    </ul>
    <hero-detail [hero]="selectedHero"><hero-detail>
    <!--父组件通过把它的selectedHero属性绑定到子组件的hero属性上，告诉子组件显示哪个英雄，hero为绑定目标-->
  `,
  styles:[`
    .selected{
        background-color:#CFD8DC !important;
        color:white;
    }
    .heroes{
        margin:0 0 2em 0;
        list-style-type:none;
        padding:0;
        width:15em;
    }
    .heroes li{
        cursor:pointer;
        position:relative;
        left:0;
        background-color:#EEE;
        margin:.5em;
        padding:.3em 0;
        height:1.6em;
        border-radius:4px;
    }
    .heroes li .selected:hover{
        backgroung-color:#BBD8DC !important;
        color:white;
    }
    .heroes li:hover{
        color:#607D8B;
        background-color:#DDD;
        left:1em;
    }
    .heroes .text{
        position:relative;
        top:-3px;
    }
    .heroes .badge{
        display:inline-block;
        font-size:small;
        color:white;
        padding:0.8em 0.7em 0 0.7em;
        background-color:#607D8B;
        line-height:1em;
        position:relative;
        left:-1px;
        top:-4px;
        height:1.8em;
        margin-right:0.8em;
        border-radius:4px 0 0 4px;
    }
  `],
  providers:[HeroService]
})
export class AppComponent {
  title = 'Tour of Heroes';
  
  
  //hero = 'Windstorm';
  
  //hero: Hero={
  //在没有提供数据的服务时，要定义heroes的数据类型
    //id: 1,
    //name: 'Windstorm'
  //}
  
  //创建组件属性，以供绑定
  //heroes = HEROES;
  //hero = HEROES[0];
  
  heroes:Hero[];
  
  constructor(private heroService:HeroService){
    this.heroes = this.heroService.getHeroes();
  }
  
  selectedHero:Hero;
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }
}

