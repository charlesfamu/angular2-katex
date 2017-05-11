import { Angular2KatexPage } from './app.po';

describe('angular2-katex App', () => {
  let page: Angular2KatexPage;

  beforeEach(() => {
    page = new Angular2KatexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
