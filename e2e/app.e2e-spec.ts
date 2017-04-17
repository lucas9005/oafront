import { OafrontPage } from './app.po';

describe('oafront App', () => {
  let page: OafrontPage;

  beforeEach(() => {
    page = new OafrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
