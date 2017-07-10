import { browser, by, element } from 'protractor';

export class HeroManage05Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
