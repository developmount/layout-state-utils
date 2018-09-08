import { createItem, updateProps, updateMetadata } from '../src/';

describe('update', () => {
  const layoutState = {
    1: createItem({ key: '1', type: 'test' }),
  };
  describe('updateProps', () => {
    const nextState = updateProps(layoutState, '1', (props) => ({
      test: true,
    }));
    it('returns a new layout state', () => {
      expect(nextState).not.toBe(layoutState);
    });
    it('updates the props', () => {
      expect(nextState['1'].props).toEqual({ test: true });
    });
    it('does not mutate the item', () => {
      expect(nextState['1']).not.toBe(layoutState['1']);
    });
  });
  describe('updateMetadata', () => {
    const nextState = updateMetadata(layoutState, '1', (metadata) => ({
      test: true,
    }));
    it('returns a new layout state', () => {
      expect(nextState).not.toBe(layoutState);
    });
    it('updates the props', () => {
      expect(nextState['1'].metadata).toEqual({ test: true });
    });
    it('does not mutate the item', () => {
      expect(nextState['1']).not.toBe(layoutState['1']);
    });
  });
});
