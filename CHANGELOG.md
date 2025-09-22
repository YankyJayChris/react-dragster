## [1.0.1] - 2025-09-22
### Added
- `className` prop to `Droppable` and `Draggable` for Tailwind CSS and custom styling support.
- Optional `styles.css` for non-Tailwind users.
### Changed
- Updated `tsconfig.json` to use `module: "NodeNext"` and `moduleResolution: "NodeNext"` for TypeScript 7.0+ compatibility.
- Updated README to document Tailwind CSS usage.
### Fixed
- Corrected test failures in `Draggable.test.tsx` and `DragDropContext.test.tsx` for accurate drag-and-drop simulation.