import update from 'immutability-helper';
import { LayoutState, LayoutItem } from './types';

const defaultItem: LayoutItem = {
  key: '',
  type: '',
  props: {},
  metadata: {},
  children: [],
};

const addItem = (layoutState: LayoutState, item: LayoutItem): LayoutState => {
  const nextItem = update(defaultItem, { $merge: item });
  return update(layoutState, { [item.key]: { $set: nextItem } });
};
export default addItem;
