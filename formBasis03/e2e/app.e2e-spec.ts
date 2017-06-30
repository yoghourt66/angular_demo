import { FormBasis03Page } from './app.po';

describe('form-basis03 App', () => {
  let page: FormBasis03Page;

  beforeEach(() => {
    page = new FormBasis03Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
