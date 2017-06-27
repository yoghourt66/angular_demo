import {Component} from '@angular/core';

@Component({
  selector:'little-tour',
  template:`
    <p>输入新的英雄，并点击add或直接回车加入列表：</p>
    <input #addName (keyup.enter)="addHero(addName.value); addName.value='' " (blur)="addHero(addName.value); addName.value='' ">
      <!--第二条指令含义：添加英雄到列表后清空输入框-->
    <button (click)="addHero(addName.value)">add</button>
    <ul>
      <li *ngFor="let hero of heroes">
        {{hero}}
      </li>
    </ul>
  `
})

export class LittleTourComponent{
  heroes = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];
  
  addHero(newHero:string){  //给传入的参数命名为newHero

 //   if(! newHero in this.heroes){
 //typeof(this.heroes)为object,不能用in，且in不保证遍历顺序
     if(newHero){
       this.heroes.push(newHero);
     }
  //  }
  
  }
}