//用工厂提供商创建HeroService的实例（注入逻辑型的isAuthorized）

import { Logger } from './logger.service';

//工厂提供商的工厂方法
let heroServiceFactory = (logger:Logger,userService:UserService)=>{
  return new HeroService(logger,userService.user.isAuthorized);
}


//把logger和userservice注入到工厂提供商中，并让注入器把它们传给工厂方法
//导出heroServiceProvider让它（工厂提供商）可以被服用。需要时，可使用这个提供商注册HeroService服务。
export let heroServiceProvider = {
  provide:HeroService,
  useFactory:heroServiceFactory,    //提供商是一个工厂方法，它的实现是heroServiceFactory
  deps:[Logger,UserService]     //提供商令牌数组，注入器解析这些令牌，把相应的服务注入到工厂函数的相应的参数中去。
};