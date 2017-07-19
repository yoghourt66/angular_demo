import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes:Routes = [
     //添加重定向路由
    {path: '', redirectTo: './dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    //带参数路由（：表占位符）
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'heroes', component: HeroesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}