import { ToDoListPage } from './app.po';

describe('to-do-list App', function() {
  let page: ToDoListPage;

  beforeEach(() => {
    page = new ToDoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
