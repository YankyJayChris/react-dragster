# React Dragster

![Test Status](https://github.com/YankyJayChris/react-dragster/actions/workflows/test.yml/badge.svg)

A lightweight, customizable drag-and-drop library for React 19 with TypeScript support. Built with performance and ease of use in mind, React Dragster provides a simple yet powerful API for implementing drag-and-drop functionality in your React applications.

## Features

- 🚀 Lightweight and performant
- 🎯 Smooth drag-and-drop animations with visual feedback
- 📦 Built with TypeScript for excellent type safety
- 🎨 Customizable styling with sensible defaults
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

The context provider that enables drag and drop functionality.

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
};
```

#### Draggable

An item that can be dragged.

```tsx
type DraggableProps = {
  id: string;
  children: ReactNode;
};
```

### Styling

Each component comes with default styling that you can override:

- **Droppable** areas have a subtle background and show a dashed border when being dragged over
- **Draggable** items have a white background, subtle shadow, and smooth transition animations
- All components are styled for a modern, clean look while maintaining excellent usability

You can override the default styles by targeting the components with CSS:

```css
.your-draggable-class {
  /* Your custom styles */
}

.your-droppable-class {
  /* Your custom styles */
}
```

### TypeScript Support

React Dragster is written in TypeScript and provides full type definitions out of the box. You'll get excellent IDE support and type safety when using the library.

### Advanced Usage

You can access the drag and drop context in your custom components using the `useDragDropContext` hook:

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