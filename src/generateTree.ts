const objectAssign = require('object-assign');
import { LayoutState, LayoutNode } from './types';

const generateTree = (
  layoutState: LayoutState,
  rootKey: string,
): LayoutNode => {
  const rootNode = objectAssign({}, layoutState[rootKey]);
  delete rootNode.parent;
  rootNode.children = rootNode.children.map((childKey) => {
    const childNode = generateTree(layoutState, childKey);
    childNode.parent = rootNode;
  });
  return rootNode;
};

export default generateTree;
