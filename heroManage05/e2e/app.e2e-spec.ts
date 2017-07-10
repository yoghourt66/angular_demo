import { HeroManage05Page } from './app.po';

describe('hero-manage05 App', () => {
  let page: HeroManage05Page;

  beforeEach(() => {
    page = new HeroManage05Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
