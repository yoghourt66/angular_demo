import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//导入form模块，可访问模板驱动表单的所有特性，包括ngModel
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
