// example/src/App.tsx
import React from 'react';
import { DragDropProvider, Droppable, Draggable } from '../../src/index';

// Optional: Import default styles for non-Tailwind users
// import 'react-dragster/dist/styles.css';

const App = () => {
  const handleDragEnd = ({ source, destination }: { source: string; destination: string }) => {
    console.log(`Item ${source} was dropped into ${destination}`);
    // Handle the logic to move the item from source to destination
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