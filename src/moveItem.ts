import { LayoutState } from './types';
import update from 'immutability-helper';

type ParentInput = {
  key: string;
  index: number;
};

const moveItem = (
  layoutState: LayoutState,
  key: string,
  parent?: ParentInput,
): LayoutState => {
  const updater: any = {};
  const item = layoutState[key];
  if (item.parent) {
    updater[item.parent] = {
      children: {
        $apply: (children: string[]) =>
          children.filter((childKey) => childKey !== key),
      },
    };
  }
  if (parent) {
    updater[key] = { parent: { $set: parent.key } };
    updater[parent.key] = { children: { $splice: [[parent.index, 0, key]] } };
  } else {
    updater[key] = { $unset: ['parent'] };
  }
  return update(layoutState, updater);
};

export default moveItem;
