//创建一个可复用的服务来调用英雄的数据

import { Injectable } from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
    getHeroes():Hero[]{
        return HEROES;
    }
}
//HeroService可以从任何地方获取Hero数据——Web服务、本地存储或模拟数据源。
//从组件中抽离服务意味着可以随时更改这些实现方式，而不影响需要这些数据的组件。