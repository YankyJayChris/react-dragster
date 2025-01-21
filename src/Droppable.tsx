import React, { useCallback, useState } from 'react';
import { useDragDropContext } from './DragDropContext';

type DroppableProps = {
  id: string;
  children: React.ReactNode;
};

export const Droppable = ({ id, children }: DroppableProps) => {
  const { handleDragEnd, draggedItem } = useDragDropContext();
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      handleDragEnd(id);
      setIsDraggingOver(false);
    },
    [handleDragEnd, id]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDraggingOver(false);
  }, []);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{
        border: isDraggingOver ? '2px dashed #007bff' : '2px dashed transparent',
        padding: '16px',
        margin: '16px',
        backgroundColor: '#f1f1f1',
        borderRadius: '8px',
        transition: 'border 0.2s ease',
      }}
    >
      {children}
    </div>
  );
};