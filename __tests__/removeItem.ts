import { createItem, removeItem } from '../src';

describe('removeItem', () => {
  const layoutState = {
    '1': createItem({ key: '1', type: 'test', children: ['2'] }),
    '2': createItem({
      key: '2',
      type: 'test',
      children: ['3', '4'],
      parent: '1',
    }),
    '3': createItem({ key: '3', type: 'test', parent: '1' }),
    '4': createItem({ key: '4', type: 'test', parent: '2' }),
  };
  const nextState = removeItem(layoutState, '2');
  it('Removes the item', () => {
    expect(nextState).not.toContain('2');
  });
  it("Removes the item's ancestors", () => {
    expect(nextState).not.toContain('3');
    expect(nextState).not.toContain('4');
  });
  it('Removes the item from its parent', () => {
    expect(nextState['1'].children).not.toContain('2');
  });
});
