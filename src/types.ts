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

export interface LayoutNode extends LayoutItemBase {
  children: LayoutNode[];
  parent?: LayoutNode;
}
