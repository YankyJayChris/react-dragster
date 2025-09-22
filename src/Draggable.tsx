// Draggable.tsx
import React, { useCallback, useRef } from 'react';
import { useDragDropContext } from './DragDropContext';

type DraggableProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export const Draggable = ({ id, children, className = '' }: DraggableProps) => {
  const { handleDragStart, draggedItem, draggedItemPosition, updateDraggedItemPosition } = useDragDropContext();
  const draggableRef = useRef<HTMLDivElement>(null);

  const handleDragStartLocal = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('text/plain', id);
      const rect = draggableRef.current?.getBoundingClientRect();
      if (rect) {
        handleDragStart(id, { x: rect.left, y: rect.top });
      }
    },
    [handleDragStart, id]
  );

  const handleDrag = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (draggedItem === id) {
        updateDraggedItemPosition({ x: e.clientX, y: e.clientY });
      }
    },
    [draggedItem, id, updateDraggedItemPosition]
  );

  const isDragging = draggedItem === id;

  return (
    <div
      ref={draggableRef}
      draggable
      onDragStart={handleDragStartLocal}
      onDrag={handleDrag}
      className={`draggable ${isDragging ? 'draggable--dragging' : ''} ${className}`}
      style={{
        transform: isDragging
          ? `translate(${draggedItemPosition.x}px, ${draggedItemPosition.y}px)`
          : 'none',
        transition: isDragging ? 'none' : 'transform 0.2s ease',
        opacity: isDragging ? 0.8 : 1,
        cursor: 'grab',
        padding: '8px',
        margin: '8px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
      }}
    >
      {children}
    </div>
  );
};