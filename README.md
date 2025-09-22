```markdown
# React Dragster

![Test Status](https://github.com/YankyJayChris/react-dragster/actions/workflows/test.yml/badge.svg)
[![npm version](https://badge.fury.io/js/react-dragster.svg)](https://www.npmjs.com/package/react-dragster)

A lightweight, customizable drag-and-drop library for React 19 with TypeScript support. Built with performance and ease of use in mind, React Dragster provides a simple yet powerful API for implementing drag-and-drop functionality in your React applications.

## Features

- 🚀 Lightweight and performant
- 🎯 Smooth drag-and-drop animations with visual feedback
- 📦 Built with TypeScript for excellent type safety
- 🎨 Customizable styling with sensible defaults (supports Tailwind CSS and custom CSS)
- 🔄 Real-time position tracking
- 💡 Simple and intuitive API
- ⚛️ Compatible with React 19

## Installation

```bash
npm install react-dragster
```

Or using yarn:

```bash
yarn add react-dragster
```

## Usage

### Basic Example

```tsx
import React from 'react';
import { DragDropProvider, Droppable, Draggable } from 'react-dragster';

const App = () => {
  const handleDragEnd = ({ source, destination }) => {
    console.log(`Item moved from ${source} to ${destination}`);
    // Handle your item movement logic here
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <Droppable id="droppable-1">
        <Draggable id="draggable-1">Drag me!</Draggable>
        <Draggable id="draggable-2">Drag me too!</Draggable>
      </Droppable>
      
      <Droppable id="droppable-2">
        <Draggable id="draggable-3">Another draggable</Draggable>
      </Droppable>
    </DragDropProvider>
  );
};
```

### Components API

#### DragDropProvider

The context provider that enables drag-and-drop functionality.

```tsx
type DragDropProviderProps = {
  children: ReactNode;
  onDragEnd: (result: { source: string; destination: string }) => void;
};
```

#### Droppable

A container that can receive draggable items.

```tsx
type DroppableProps = {
  id: string;
  children: ReactNode;
  className?: string; // Optional className for custom or Tailwind CSS styling
};
```

#### Draggable

An item that can be dragged.

```tsx
type DraggableProps = {
  id: string;
  children: ReactNode;
  className?: string; // Optional className for custom or Tailwind CSS styling
};
```

### Styling

React Dragster provides default inline styles for a modern, clean look with smooth animations, ensuring functionality out of the box. You can customize the appearance using the `className` prop on `Droppable` and `Draggable` components.

#### Using Default Styles (Non-Tailwind Users)

For users not using Tailwind CSS, you can import the optional `styles.css` file included in the package to apply default styling:

```tsx
import React from 'react';
import { DragDropProvider, Droppable, Draggable } from 'react-dragster';
import 'react-dragster/dist/styles.css'; // Import default styles

const App = () => {
  const handleDragEnd = ({ source, destination }) => {
    console.log(`Item moved from ${source} to ${destination}`);
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <Droppable id="droppable-1">
        <Draggable id="draggable-1">Drag me!</Draggable>
      </Droppable>
    </DragDropProvider>
  );
};
```

The `styles.css` file includes styles for the following classes:
- `.droppable`: Base styles for droppable areas.
- `.droppable--dragging-over`: Styles applied when dragging over a droppable area.
- `.draggable`: Base styles for draggable items.
- `.draggable--dragging`: Styles applied when an item is being dragged.

#### Using Tailwind CSS

If your project uses Tailwind CSS, you can pass Tailwind classes via the `className` prop:

```tsx
import React from 'react';
import { DragDropProvider, Droppable, Draggable } from 'react-dragster';

// Optional: Import default styles for non-Tailwind users
// import 'react-dragster/dist/styles.css';

const App = () => {
  const handleDragEnd = ({ source, destination }: { source: string; destination: string }) => {
    console.log(`Item ${source} was dropped into ${destination}`);
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <Droppable
        id="droppable-1"
        className="p-6 m-6 bg-gray-200 rounded-lg border-2 border-dashed border-transparent hover:border-blue-500"
      >
        <Draggable
          id="draggable-1"
          className="p-4 m-4 bg-white border border-gray-300 rounded-md cursor-grab hover:opacity-80"
        >
          Item 1
        </Draggable>
        <Draggable
          id="draggable-2"
          className="p-4 m-4 bg-white border border-gray-300 rounded-md cursor-grab hover:opacity-80"
        >
          Item 2
        </Draggable>
      </Droppable>
      <Droppable
        id="droppable-2"
        className="p-6 m-6 bg-gray-200 rounded-lg border-2 border-dashed border-transparent hover:border-blue-500"
      >
        <Draggable
          id="draggable-3"
          className="p-4 m-4 bg-white border border-gray-300 rounded-md cursor-grab hover:opacity-80"
        >
          Item 3
        </Draggable>
      </Droppable>
    </DragDropProvider>
  );
};

export default App;
```

#### Using Custom CSS

You can override the default styles by targeting the component classes in your own CSS file:

```css
.droppable {
  /* Custom styles for droppable areas */
}

.droppable--dragging-over {
  /* Styles when dragging over a droppable area */
}

.draggable {
  /* Custom styles for draggable items */
}

.draggable--dragging {
  /* Styles when an item is being dragged */
}
```

#### Notes on Styling
- **Default Styles**: Inline styles ensure the components work out of the box without requiring external CSS.
- **Customizable**: Use the `className` prop to add Tailwind classes or custom CSS classes.
- **No Dependencies**: The package does not depend on Tailwind CSS, making it compatible with any styling solution.
- **Optional CSS**: Import `react-dragster/dist/styles.css` for default styles if not using Tailwind or custom CSS.

### TypeScript Support

React Dragster is written in TypeScript and provides full type definitions out of the box. You'll get excellent IDE support and type safety when using the library.

### Advanced Usage

You can access the drag-and-drop context in your custom components using the `useDragDropContext` hook:

```tsx
import { useDragDropContext } from 'react-dragster';

const CustomComponent = () => {
  const { draggedItem, draggedItemPosition } = useDragDropContext();
  
  // Use context values in your component
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT © [IGIHOZO Jean Christian]
```