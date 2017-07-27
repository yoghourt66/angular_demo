//创建一个可复用的服务来调用英雄的数据

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Rx";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import {Hero} from './hero';
//import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
    //阻塞
    //getHeroes():Hero[]{
      //  return HEROES;
    //}
    //会等所有跟heroes有关的数据加载完成后在一起渲染整个页面。
    
    
    //异步调用getHeroes方法,返回承诺
    //getHeroes():Promise<Hero[]>{
    //    return Promise.resolve(HEROES);
    //}
    
    
    //通过HTTP服务异步获取数据
    private heroesUrl = 'http://23.106.129.37:9888/heroes?format=jsonp&callback=JSONP_CALLBACK';
    
    constructor(private jsonp: Jsonp, private http:Http) {}
    
    getHeroes(): Observable<Hero[]>{
        return this.jsonp.get(this.heroesUrl)
                    .map(res => res.json().data as Hero[]);
    }
    
    //search(term: string){
     //   let heroesUrl = "http://23.106.129.37:26605/heroes";
        
    //    let params = new URLSearchParams();
     //   params.set('search',term);
    //    params.set('action','opensearch');
     //   params.set('format','json');
     //   params.set('callback','JSONP_CALLBACK');
        
     //   return this.jsonp
       //             .get(heroesUrl,{search: params})
     //               .map(response => <string[]> response.json()[1]);
    //}
    
    
    //getHeroes(): Promise<Hero[]> {
    //    return this.http.get(this.heroesUrl)
     //               .toPromise()
      //              .then(response => response.json().data as Hero[])
    //                .catch(this.handleError);
    //}
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    
    //模拟慢速连接
    //getHeroesSlowly():Promise<Hero[]>{
      //  return new Promise(resolve => {
      //     //simulate server latency with 2 second delay
      //     setTimeout(()=> resolve(this.getHeroes()),2000);
       // });
    //}
    
    
    
    //getHero(id:number): Promise<Hero>{
      //  return this.getHeroes()
        //    .then(heroes=> heroes.find(hero=>hero.id === id));
    //}
    
    //http请求单个英雄数据
    getHero(id:number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }
}
//HeroService可以从任何地方获取Hero数据——Web服务、本地存储或模拟数据源。
//从组件中抽离服务意味着可以随时更改这些实现方式，而不影响需要这些数据的组件。