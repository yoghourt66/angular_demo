import { Component } from '@angular/core';

import { HeroService } from './hero.service';
//根模块中注册服务到当前providers中，仅在该组件及其子组件中可用

@Component({
  selector: 'app-root',
  providers:[HeroService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
