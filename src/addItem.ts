import update from 'immutability-helper';
import { LayoutState, LayoutItemInput, LayoutItem } from './types';

const defaultItem: LayoutItem = {
  key: '',
  type: '',
  props: {},
  metadata: {},
  children: [],
};

const addItem = (
  layoutState: LayoutState,
  item: LayoutItemInput,
): LayoutState => {
  const nextItem = update(defaultItem, { $merge: item });
  return update(layoutState, { [item.key]: { $set: nextItem } });
};
export default addItem;
