# React Dragster

![Test Status](https://github.com/YankyJayChris/react-dragster/actions/workflows/test.yml/badge.svg)

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

#### Using Tailwind CSS

If your project uses Tailwind CSS, you can pass Tailwind classes via the `className` prop:

```tsx
<Droppable
  id="droppable-1"
  className="p-6 m-6 bg-gray-200 rounded-lg border-2 border-dashed border-transparent hover:border-blue-500"
>
  <Draggable
    id="draggable-1"
    className="p-4 m-4 bg-white border border-gray-300 rounded-md cursor-grab hover:opacity-80"
  >
    Drag me!
  </Draggable>
</Droppable>
```

#### Using Custom CSS

For projects without Tailwind, you can use the default inline styles or provide custom CSS by targeting the component classes:

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

Optionally, you can include a `styles.css` file with default styles (provided in the package documentation) for non-Tailwind users:

```css
.droppable {
  padding: 16px;
  margin: 16px;
  background-color: #f1f1f1;
  border-radius: 8px;
  transition: border 0.2s ease;
}

.droppable--dragging-over {
  border: 2px dashed #007bff;
}

.draggable {
  padding: 8px;
  margin: 8px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: grab;
  transition: transform 0.2s ease;
}

.draggable--dragging {
  opacity: 0.8;
  transition: none;
}
```

#### Notes on Styling
- **Default Styles**: Inline styles ensure the components work out of the box without requiring external CSS.
- **Customizable**: Use the `className` prop to add Tailwind classes or custom CSS classes.
- **No Dependencies**: The package does not depend on Tailwind CSS, making it compatible with any styling solution.

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