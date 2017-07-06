import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Logger } from './logger.service';
//在根模块注册到providers[]中，以便其他地方需要日志服务时使用

@Injectable()
export class HeroService{
  constructor(private logger:Logger){}
  //声明logger为私有属性

  getHeroes(){
    this.logger.log('Getting heroes...');
    return HEROES;
  }
}