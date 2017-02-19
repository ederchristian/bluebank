import { BlueBankWelcomePage } from './app.po';

describe('blue-bank-welcome App', function() {
  let page: BlueBankWelcomePage;

  beforeEach(() => {
    page = new BlueBankWelcomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
