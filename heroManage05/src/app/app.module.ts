import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
        path:'heroes',
        component:HeroesComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        //添加重定向路由
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },
    {
        //带参数路由（：占位符）
        path:'detail/:id',
        component:HeroDetailComponent
        
    }
    ])
  ],
  providers: [ 
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
