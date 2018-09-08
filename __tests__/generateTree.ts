import { createItem, generateTree } from '../src';

describe('generateTree', () => {
  it('Generates a tree from a layout state', () => {
    const layoutState = {
      1: createItem({
        key: '1',
        type: 'test',
        children: ['2', '3'],
      }),
      2: createItem({
        key: '2',
        type: 'test',
        children: ['4'],
        parent: '1',
      }),
      3: createItem({
        key: '3',
        type: 'test',
        children: ['5'],
        parent: '1',
      }),
      4: createItem({
        key: '4',
        type: 'test',
        parent: '2',
      }),
      5: createItem({
        key: '5',
        type: 'test',
        parent: '3',
      }),
    };
    const tree = generateTree(layoutState, '1');
  });
});
