import { Component } from '@angular/core';

@Component({
  selector: 'keyup',
  template:`
    <!-- 按下并释放一个键时，触发keyup事件（处理每一次按键）-->    
    <p>模板引入事件对象：</p>
    <input (keyup)="onKey($event)"/>
    <p>{{values}}</p>
 `
})

export class KeyUpComponent_v1{
  values = '';
  
  onKey(event:any){ //without type info
    this.values += event.target.value + '|';  //显示当前元素中的内容
    //this.values += event.key + '|'; //显示所按的键
  }
  //把整个DOM事件$event传入到方法中，会导致组件必须知道更多本不需要的模板信息才能正常工作，违反了模板组件分离原则。
}





@Component({
  selector:'keyup2',
  template:`
    <p>模板引入变量：</p>
    <input #box (keyup)="onKey(box.value)"/>
      <!--box绑定了input元素，可以看成指令，注意指令的空格-->
    <p>{{values}}</p>
  `
})

export class KeyUpComponent_v2{
  values = '';
  onKey(value:string){
    this.values += value + '|';
    //好处：组件从模板中获得了干净的数据值，不用了解$event变量及其结构。
  }
}





@Component({
  selector: 'keyup3',
  template: `
    <p>angular keyup.enter模拟事件：</p>
    <input #box (keyup.enter)="onEnter(box.value)"/>
      <!--angular keyup.enter模拟事件无效-->
    <p>{{value}}</p>
  `
})

export class KeyUpComponent_v3{
  value = '';
  onEnter(value:string){
    this.value = value;
  }
}





@Component({
  selector: 'keyup4',
  template: `
    <p>失去焦点事件：（此例添加了失去焦点仍显示组件value值的功能）</p>
    <input #box (keyup.enter)="update(box.value)" (blur)="update(box.value)"/>
    <p>{{value}}</p>
  `
})

export class KeyUpComponent_v4{
  value = '';
  
  update(value:string){
    this.value = value;
  }
}