import { UserInput02Page } from './app.po';

describe('user-input02 App', () => {
  let page: UserInput02Page;

  beforeEach(() => {
    page = new UserInput02Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
