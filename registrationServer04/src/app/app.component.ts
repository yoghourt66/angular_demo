import { Component } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  providers:[HeroService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
