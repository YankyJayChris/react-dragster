// src/__tests__/DragDropContext.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DragDropProvider, useDragDropContext, Droppable, Draggable } from '../index';

const TestComponent = () => {
  const { handleDragStart, handleDragEnd, draggedItem, draggedItemPosition, updateDraggedItemPosition } = useDragDropContext();
  return (
    <div>
      <button onClick={() => handleDragStart('item-1', { x: 0, y: 0 })}>Start Drag</button>
      <button onClick={() => handleDragEnd('droppable-1')}>End Drag</button>
      <button onClick={() => updateDraggedItemPosition({ x: 100, y: 100 })}>Update Position</button>
      <div data-testid="dragged-item">{draggedItem}</div>
      <div data-testid="position">{`${draggedItemPosition.x},${draggedItemPosition.y}`}</div>
    </div>
  );
};

describe('DragDropProvider', () => {
  const mockOnDragEnd = jest.fn();

  beforeEach(() => {
    mockOnDragEnd.mockClear();
  });

  it('provides context to children', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <TestComponent />
      </DragDropProvider>
    );

    expect(screen.getByText('Start Drag')).toBeInTheDocument();
    expect(screen.getByText('End Drag')).toBeInTheDocument();
  });

  it('handles drag start correctly', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <TestComponent />
      </DragDropProvider>
    );

    const startButton = screen.getByText('Start Drag');
    fireEvent.click(startButton);

    expect(screen.getByTestId('dragged-item')).toHaveTextContent('item-1');
    expect(screen.getByTestId('position')).toHaveTextContent('0,0');
  });

  it('handles drag end with valid source and destination', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <TestComponent />
      </DragDropProvider>
    );

    const startButton = screen.getByText('Start Drag');
    const endButton = screen.getByText('End Drag');

    fireEvent.click(startButton);
    fireEvent.click(endButton);

    expect(mockOnDragEnd).toHaveBeenCalledWith({
      source: 'item-1',
      destination: 'droppable-1'
    });
    expect(screen.getByTestId('dragged-item')).toHaveTextContent('');
  });

  it('handles drag end without draggedItem', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <TestComponent />
      </DragDropProvider>
    );

    const endButton = screen.getByText('End Drag');
    fireEvent.click(endButton);

    expect(mockOnDragEnd).not.toHaveBeenCalled();
  });

  it('updates dragged item position', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <TestComponent />
      </DragDropProvider>
    );

    const updateButton = screen.getByText('Update Position');
    fireEvent.click(updateButton);

    expect(screen.getByTestId('position')).toHaveTextContent('100,100');
  });

  it('works with Droppable and Draggable components', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <Droppable id="drop-1">
          <Draggable id="drag-1">
            <div data-testid="draggable-content">Drag me</div>
          </Draggable>
        </Droppable>
      </DragDropProvider>
    );

    const draggable = screen.getByTestId('draggable-content').parentElement!;
    const droppable = screen.getByTestId('draggable-content').parentElement!.parentElement!;

    const dataTransfer = {
      setData: jest.fn(),
      getData: jest.fn().mockReturnValue('drag-1'),
    };

    fireEvent.dragStart(draggable, { dataTransfer });
    expect(draggable).toHaveClass('draggable--dragging');

    fireEvent.dragOver(droppable);
    expect(droppable).toHaveClass('droppable--dragging-over');

    fireEvent.drop(droppable, { dataTransfer });
    expect(mockOnDragEnd).toHaveBeenCalledWith({
      source: 'drag-1',
      destination: 'drop-1'
    });
    expect(draggable).not.toHaveClass('draggable--dragging');
    expect(droppable).not.toHaveClass('droppable--dragging-over');
  });
});