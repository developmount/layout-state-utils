import { LayoutItem } from './types';

const createItem = ({
  key,
  type,
  props = {},
  metadata = {},
  children = [],
  parent,
}: LayoutItem): LayoutItem => {
  return { key, type, props, metadata, children, parent };
};

export default createItem;
