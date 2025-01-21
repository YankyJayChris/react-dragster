// src/__tests__/DragDropProvider.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DragDropProvider, useDragDropContext } from '../DragDropContext';

const TestComponent = () => {
  const { handleDragStart, handleDragEnd } = useDragDropContext();
  return (
    <div>
      <button onClick={() => handleDragStart('item-1', { x: 0, y: 0 })}>Start Drag</button>
      <button onClick={() => handleDragEnd('droppable-1')}>End Drag</button>
    </div>
  );
};

describe('DragDropProvider', () => {
  it('provides context', () => {
    render(
      <DragDropProvider onDragEnd={() => {}}>
        <TestComponent />
      </DragDropProvider>
    );

    expect(screen.getByText('Start Drag')).toBeInTheDocument();
    expect(screen.getByText('End Drag')).toBeInTheDocument();
  });
});