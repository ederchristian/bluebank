import { BlueBankAppPage } from './app.po';

describe('blue-bank-app App', function() {
  let page: BlueBankAppPage;

  beforeEach(() => {
    page = new BlueBankAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
