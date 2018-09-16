# Layout State Utils

![npm](https://img.shields.io/npm/v/layout-state-utils.svg?style=flat-square)
[![CircleCI](https://circleci.com/gh/gregchamberlain/layout-state-utils/tree/master.svg?style=svg)](https://circleci.com/gh/gregchamberlain/layout-state-utils/tree/master)

## LayoutState

A `LayoutState` is meant to be an immutable, serializable representation of a
layout.

```ts
interface ItemProps {
  [key: string]: any;
}

interface ItemMetadata {
  [key: string]: any;
}

interface LayoutItem {
  key: string;
  type: string;
  props: ItemProps;
  metadata: ItemMetadata;
  children: string[];
  parent?: string;
}

interface LayoutState {
  [key: string]: LayoutItem;
}
```

## Utils

All util functions that change a `LayoutState` will return a new `LayoutState`
with the change, and not change the original.

### createKey

Creates a unique key that can be used to add an item to the `LayoutState`.

```ts
const createKey: (layoutState: LayoutState) => string;
```

### addItem

Adds a `LayoutItem` to the `LayoutState`.

```ts
interface LayoutItemInput {
  key: string;
  type: string;
  props?: ItemProps;
  metadata?: ItemMetadata;
  children?: string[];
  parent?: string;
}

const addItem: (layoutState: LayoutState, item: LayoutItemInput) => LayoutState;
```

### moveItem

Moves a `LayoutItem` in the `LayoutState`. If a `parent` is not provided,
the `LayoutItem` will remain in the `LayoutState`, but will not be referenced
by any other `LayoutItem`s.

```ts
type ParentInput = {
  key: string;
  index: number;
};

const moveItem: (
  layoutState: LayoutState,
  key: string,
  parent?: ParentInput,
) => LayoutState;
```

### removeItem

Removes a `LayoutItem` and all of its descendants from the `LayoutState`.

```ts
const removeItem: (layoutState: LayoutState, key: string) => LayoutState;
```

### updateProps

Updates a `LayoutItem`'s props in the `LayoutState`.

`updateFn` must return a new `ItemProps` and not mutate the original.

```ts
type PropUpdater = (ItemProps) => ItemProps;

const updateProps: (
  layoutState: LayoutState,
  key: string,
  updateFn: PropUpdater,
) => LayoutState;
```

### updateMetadata

Updates a `LayoutItem`'s metadata in the `LayoutState`.

`updateFn` must return a new `ItemMetadata` and not mutate the original.

```ts
type MetadataUpdater = (ItemMetadata) => ItemMetadata;

const updateMetadata: (
  layoutState: LayoutState,
  key: string,
  updateFn: MetadataUpdater,
) => LayoutState;
```
