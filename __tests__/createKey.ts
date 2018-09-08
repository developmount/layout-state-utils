import { createItem, createKey } from '../src';

jest.mock('../src/helpers', () => {
  let key = 1;
  return {
    generateRandomKey: () => `${key++}`,
  };
});

describe('createKey', () => {
  it('returns a random key', () => {
    const layoutState = {};
    const key = createKey(layoutState);
    expect(key).toEqual('1');
  });
  it('does not return a key that exists in the layoutState', () => {
    const layoutState = { 1: createItem({ key: '1', type: 'test' }) };
    const key = createKey(layoutState);
    expect(key).toEqual('2');
  });
});
