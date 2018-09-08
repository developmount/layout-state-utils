const objectAssign = require('object-assign');
import update from 'immutability-helper';
import { LayoutState, LayoutItemInput } from './types';

const defaultItem = {
  props: {},
  metadata: {},
  children: [],
};

const addItem = (
  layoutState: LayoutState,
  item: LayoutItemInput,
): LayoutState => {
  const nextItem = objectAssign({}, defaultItem, item);
  return update(layoutState, { [item.key]: { $set: nextItem } });
};
export default addItem;
