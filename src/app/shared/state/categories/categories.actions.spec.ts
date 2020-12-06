import * as fromCategories from './categories.actions';

describe('loadCategoriess', () => {
  it('should return an action', () => {
    expect(fromCategories.loadCategoriess().type).toBe('[Categories] Load Categoriess');
  });
});
