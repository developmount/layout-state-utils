import { addItem, createItem } from '../src';

describe('addItem', () => {
  it('Should return a new layout state object', () => {
    const layoutState = {};
    const item = createItem({ key: '1', type: 'test' });
    const nextState = addItem(layoutState, item);
    expect(nextState).not.toBe(layoutState);
  });
  it('Should add the item', () => {
    const layoutState = {};
    const item = createItem({ key: '1', type: 'test' });
    const nextState = addItem(layoutState, item);
    expect(nextState['1']).toEqual(item);
  });
});
