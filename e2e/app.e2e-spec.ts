import { FormtestPage } from './app.po';

describe('formtest App', function() {
  let page: FormtestPage;

  beforeEach(() => {
    page = new FormtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
