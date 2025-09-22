// DragDropContext.tsx
import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from 'react';

type DragDropContextType = {
  handleDragStart: (item: string, initialPosition: { x: number; y: number }) => void;
  handleDragEnd: (destination: string) => void;
  draggedItem: string | null;
  draggedItemPosition: { x: number; y: number };
  updateDraggedItemPosition: (position: { x: number; y: number }) => void;
};

const DragDropContext = createContext<DragDropContextType | null>(null);

export const useDragDropContext = () => {
  const context = useContext(DragDropContext);
  if (!context) {
    throw new Error('useDragDropContext must be used within a DragDropProvider');
  }
  return context;
};

type DragDropProviderProps = {
  children: ReactNode;
  onDragEnd: (result: { source: string; destination: string }) => void;
};

export const DragDropProvider = ({ children, onDragEnd }: DragDropProviderProps) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [draggedItemPosition, setDraggedItemPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = useCallback((item: string, initialPosition: { x: number; y: number }) => {
    setDraggedItem(item);
    setDraggedItemPosition(initialPosition);
  }, []);

  const handleDragEnd = useCallback((destination: string) => {
    if (destination && draggedItem) {
      onDragEnd({ source: draggedItem, destination });
    }
    setDraggedItem(null);
  }, [draggedItem, onDragEnd]);

  const updateDraggedItemPosition = useCallback((position: { x: number; y: number }) => {
    setDraggedItemPosition(position);
  }, []);

  const contextValue = useMemo(() => ({
    handleDragStart,
    handleDragEnd,
    draggedItem,
    draggedItemPosition,
    updateDraggedItemPosition
  }), [handleDragStart, handleDragEnd, draggedItem, draggedItemPosition, updateDraggedItemPosition]);

  return (
    <DragDropContext.Provider value={contextValue}>
      {children}
    </DragDropContext.Provider>
  );
};