//该组件功能：通过它的输入属性hero接收一个英雄对象，然后显示到模板中。

import { Component,Input,OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector:'hero-detail',
    templateUrl:'./hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css'],
})

export class HeroDetailComponent implements OnInit{
    //@Input() 
    hero:Hero;
    //绑定目标必须是一个输入属性（或者输出属性），可在heroes.component模板的<hero-detail>标签中查看
    
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}
    
    ngOnInit(): void{
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }
    
    goBack():void{
        this.location.back();
    }
}