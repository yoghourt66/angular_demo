import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Hero } from './hero';
import {HeroService} from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit{
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
  
  constructor(
    private heroService:HeroService,
    private router: Router
  ){
    //this.heroes = this.heroService.getHeroes();
    //构造函数获取数据的操作用生命周期钩子代替。
  }
  
  selectedHero:Hero;
  onSelect(hero:Hero): void{
    this.selectedHero = hero;
  }
  
  
  //生命周期钩子
  ngOnInit(): void{
    this.getHeroes();
  }
  
  //getHeroes():void{
  //  this.heroes = this.heroService.getHeroes();
  //}
  
  getHeroes():void{
    //无延迟异步加载
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
    
    //慢速异步加载
    //this.heroService.getHeroesSlowly().then(heroes=>this.heroes=heroes);
    //一旦承诺的事情被成功解决，把回调函数作为参数传给承诺对象的then方法。
    //此时页面中不需要heroes数据的地方先渲染，2s后，需要用heroes数据渲染的视图后渲染出来。不必等所有数据全部加载完成后整体渲染。
  }


  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]);
    //使用链接参数数组传递到路由的navigate()，与在模板中绑定[routerLink]一样。
  }
  
}

