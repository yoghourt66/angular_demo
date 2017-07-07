//HeroService最初功能：提供英雄信息。
//HeroService服务功能：对普通用户隐藏掉秘密英雄，只有授权用户才能看到秘密英雄。


import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Logger } from './logger.service';
//在根模块注册到providers[]中，以便其他地方需要日志服务时使用

@Injectable()
export class HeroService{

  //请求注入器注入服务实例（构造函数注入模式）：
  constructor(private logger:Logger,private isAuthorized:boolean){}
  //声明logger为私有属性，设置布尔型标志根据权限控制是否显示隐藏的英雄。

  getHeroes(){
    let auth = this.isAuthorized?'authorized':'unauthorized';
    
    //this.logger.log('Getting heroes...');
    this.logger.log('Getting heroes for ${auth} user.');
    //return HEROES;
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}