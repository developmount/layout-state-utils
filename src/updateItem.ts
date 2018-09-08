import update from 'immutability-helper';
import { LayoutState, ItemProps, ItemMetadata } from './types';

type PropUpdater = (props: ItemProps) => ItemProps;

const updateProps = (
  layoutState: LayoutState,
  key: string,
  updateFn: PropUpdater,
): LayoutState => {
  return update(layoutState, { [key]: { props: { $apply: updateFn } } });
};

type MetadataUpdater = (metadata: ItemMetadata) => ItemMetadata;

const updateMetadata = (
  layoutState: LayoutState,
  key: string,
  updateFn: MetadataUpdater,
): LayoutState => {
  return update(layoutState, { [key]: { metadata: { $apply: updateFn } } });
};

export { updateProps, updateMetadata };
