//该组件功能：通过它的输入属性hero接收一个英雄对象，然后显示到模板中。

import { Component,Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector:'hero-detail',
    template:`
        <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
    </div>
    `
})

export class HeroDetailComponent{
    @Input() hero:Hero;
    //绑定目标必须是一个输入属性（或者输出属性）
}