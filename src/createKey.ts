import { generateRandomKey } from './helpers';
import { LayoutState } from './types';

const createKey = (layoutState: LayoutState): string => {
  let key;
  while (!key || layoutState[key]) {
    key = generateRandomKey();
  }
  return key;
};

export default createKey;
