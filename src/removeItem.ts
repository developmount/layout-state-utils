import update from 'immutability-helper';
import { LayoutState } from './types';

const getAncestorKeys = (
  layoutState: LayoutState,
  key: string,
  keys: string[] = [],
): string[] => {
  const item = layoutState[key];
  for (const childKey of item.children) {
    keys.push(childKey);
    getAncestorKeys(layoutState, childKey, keys);
  }
  return keys;
};

const removeItem = (layoutState: LayoutState, key: string): LayoutState => {
  const ancestorKeys = getAncestorKeys(layoutState, key);
  const updater = { $unset: [key, ...ancestorKeys] };
  const item = layoutState[key];
  if (item.parent) {
    updater[item.parent] = {
      children: {
        $apply: (children) => children.filter((childKey) => childKey !== key),
      },
    };
  }
  return update(layoutState, updater);
};

export default removeItem;
