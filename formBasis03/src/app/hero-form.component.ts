import {Component} from '@angular/core';

//在组件中导入模型？
import {Hero} from './hero';


@Component({
  selector:'hero-form',
  templateUrl:'./hero-form.component.html'
})

export class HeroFormComponent{
  powers = ['Really Smart','Super Flexible','Super Hot','Weather Changer'];
  
  model = new Hero(18,'Dr IQ',this.powers[0],'Chuck Overstreet');
  
  submitted = false;
  
  onSubmit(){this.submitted = true;}
  
  //TODO:remove when done
  get diagmostic(){return JSON.stringify(this.model);}
  //实时把组件属性model的值用JSON的形式返回
}