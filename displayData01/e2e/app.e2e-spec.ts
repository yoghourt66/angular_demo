import { DisplayData01Page } from './app.po';

describe('display-data01 App', () => {
  let page: DisplayData01Page;

  beforeEach(() => {
    page = new DisplayData01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
