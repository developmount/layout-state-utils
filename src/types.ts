interface LayoutItemBase {
  key: string;
  type: string;
  props: {
    [key: string]: any;
  };
  metadata: {
    [key: string]: any;
  };
}

export interface LayoutItemInput {
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

export interface ItemProps {
  [key: string]: any;
}

export interface ItemMetadata {
  [key: string]: any;
}

export interface LayoutItem extends LayoutItemBase {
  children: string[];
  parent?: string;
}

export interface LayoutState {
  [key: string]: LayoutItem;
}
