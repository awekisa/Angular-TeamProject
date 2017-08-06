import { TeamProjectPage } from './app.po';

describe('team-project App', () => {
  let page: TeamProjectPage;

  beforeEach(() => {
    page = new TeamProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
