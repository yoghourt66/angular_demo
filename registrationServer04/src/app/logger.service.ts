import {Injectable} from '@angular/core';

@Injectable()
export class Logger{
  logs:string[]=[]; //声明logs为字符串类型的数组，存储日志信息，并初始化为空
  
  log(message:string){
    this.logs.push(message);
    console.log(message);
  }
}