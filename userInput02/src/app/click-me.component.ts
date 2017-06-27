import { Component } from '@angular/core';

@Component({
  selector:'click-me',
  template:`
    <button (click)="onClickMe()">template button</button>
    {{clickMessage}}
  `
})
export class ClickMeComponent{
  clickMessage = '';
  
  onClickMe(){
    this.clickMessage = 'You are my hero !';
  }
}