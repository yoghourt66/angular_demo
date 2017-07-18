//创建一个可复用的服务来调用英雄的数据

import { Injectable } from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
    //阻塞
    //getHeroes():Hero[]{
      //  return HEROES;
    //}
    //会等所有跟heroes有关的数据加载完成后在一起渲染整个页面。
    
    //异步调用getHeroes方法,返回承诺
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }
    
    //模拟慢速连接
    //getHeroesSlowly():Promise<Hero[]>{
      //  return new Promise(resolve => {
      //     //simulate server latency with 2 second delay
      //     setTimeout(()=> resolve(this.getHeroes()),2000);
       // });
    //}
    
    
    getHero(id:number): Promise<Hero>{
        return this.getHeroes()
            .then(heroes=> heroes.find(hero=>hero.id === id));
    }
}
//HeroService可以从任何地方获取Hero数据——Web服务、本地存储或模拟数据源。
//从组件中抽离服务意味着可以随时更改这些实现方式，而不影响需要这些数据的组件。