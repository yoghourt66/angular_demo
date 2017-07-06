import { RegistrationServer04Page } from './app.po';

describe('registration-server04 App', () => {
  let page: RegistrationServer04Page;

  beforeEach(() => {
    page = new RegistrationServer04Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
