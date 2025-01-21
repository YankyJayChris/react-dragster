import React from 'react';
import { DragDropProvider, Droppable, Draggable } from '../../src/index'; 

const App = () => {
  const handleDragEnd = ({ source, destination }: { source: string; destination: string }) => {
    console.log(`Item ${source} was dropped into ${destination}`);
    // Handle the logic to move the item from source to destination
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <Droppable id="droppable-1">
        <Draggable id="draggable-1">Item 1</Draggable>
        <Draggable id="draggable-2">Item 2</Draggable>
      </Droppable>
      <Droppable id="droppable-2">
        <Draggable id="draggable-3">Item 3</Draggable>
      </Droppable>
    </DragDropProvider>
  );
};

export default App;