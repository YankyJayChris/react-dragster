# 1.0.0 (2025-09-22)


### Features

* add Tailwind CSS support, fix TypeScript config, and update tests ([2916a5b](https://github.com/YankyJayChris/react-dragster/commit/2916a5bd3b9ba9649aeecd03b6388013a3923bda))
* update workflow on github for automates deployment ([084528d](https://github.com/YankyJayChris/react-dragster/commit/084528df83290ab087d9d0c9fc3da74b31a5c66c))

## [1.0.1] - 2025-09-22
### Added
- `className` prop to `Droppable` and `Draggable` for Tailwind CSS and custom styling support.
- Optional `styles.css` for non-Tailwind users.
### Changed
- Updated `tsconfig.json` to use `module: "NodeNext"` and `moduleResolution: "NodeNext"` for TypeScript 7.0+ compatibility.
- Updated README to document Tailwind CSS usage.
### Fixed
- Corrected test failures in `Draggable.test.tsx` and `DragDropContext.test.tsx` for accurate drag-and-drop simulation.
