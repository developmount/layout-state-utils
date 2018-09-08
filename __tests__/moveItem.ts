import { createItem, moveItem } from '../src';

describe('moveItem', () => {
  it('Removes the item from its current parent', () => {
    const item1 = createItem({ key: '1', type: 'test', children: ['2'] });
    const item2 = createItem({
      key: '2',
      type: 'test',
      children: ['3'],
      parent: '1',
    });
    const item3 = createItem({ key: '3', type: 'test', parent: '2' });
    const layoutState = { '1': item1, '2': item2, '3': item3 };
    const nextState = moveItem(layoutState, '3');
    expect(nextState['2'].children).toHaveLength(0);
  });
  describe('No ParentInput', () => {
    it("Unsets the item's parent", () => {
      const parent = createItem({ key: '1', type: 'test', children: ['2'] });
      const child = createItem({ key: '2', type: 'test', parent: '1' });
      const layoutState = { 1: parent, 2: child };
      const nextState = moveItem(layoutState, '2');
      expect(nextState['2'].parent).toBeUndefined();
    });
  });
  describe('ParentInput', () => {
    it("Sets the item's parent", () => {
      const parent = createItem({ key: '1', type: 'test', children: ['2'] });
      const child = createItem({ key: '2', type: 'test', parent: '1' });
      const nextParent = createItem({ key: '3', type: 'test' });
      const layoutState = { 1: parent, 2: child, 3: nextParent };
      const nextState = moveItem(layoutState, '2', {
        key: '3',
        index: 0,
      });
      expect(nextState['2'].parent).toBe('3');
    });
    it("Adds the item's key to the children", () => {
      const parent = createItem({ key: '1', type: 'test', children: ['2'] });
      const child = createItem({ key: '2', type: 'test', parent: '1' });
      const nextParent = createItem({ key: '3', type: 'test' });
      const layoutState = { 1: parent, 2: child, 3: nextParent };
      const nextState = moveItem(layoutState, '2', {
        key: '3',
        index: 0,
      });
      expect(nextState['3'].children).toEqual(['2']);
    });
  });
});
