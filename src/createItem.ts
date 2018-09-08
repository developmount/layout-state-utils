import { LayoutItem } from './types';

interface LayoutItemInput {
  key: string;
  type: string;
  props?: {
    [key: string]: any;
  };
  metadata?: {
    [key: string]: any;
  };
  children?: string[];
  parent?: string;
}

const createItem = ({
  key,
  type,
  props = {},
  metadata = {},
  children = [],
  parent,
}: LayoutItemInput): LayoutItem => {
  return { key, type, props, metadata, children, parent };
};

export default createItem;
