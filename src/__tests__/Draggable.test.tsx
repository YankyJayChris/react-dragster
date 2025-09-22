// src/__tests__/Droggable.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Draggable } from '../Draggable';
import { Droppable } from '../Droppable';
import { DragDropProvider } from '../DragDropContext';

describe('Draggable', () => {
  const TestComponent = ({ className }: { className?: string }) => (
    <Droppable id="drop-1">
      <Draggable id="test-id" className={className}>
        <div>Drag me</div>
      </Draggable>
    </Droppable>
  );

  it('renders children correctly', () => {
    const { getByText } = render(
      <DragDropProvider onDragEnd={() => {}}>
        <TestComponent />
      </DragDropProvider>
    );
    expect(getByText('Drag me')).toBeInTheDocument();
  });

  it('has draggable attributes', () => {
    const { container } = render(
      <DragDropProvider onDragEnd={() => {}}>
        <TestComponent />
      </DragDropProvider>
    );
    const draggable = container.querySelector('.draggable');
    expect(draggable).toHaveAttribute('draggable', 'true');
  });

  it('handles drag start event', () => {
    const { container } = render(
      <DragDropProvider onDragEnd={() => {}}>
        <TestComponent />
      </DragDropProvider>
    );
    const draggable = container.querySelector('.draggable') as HTMLElement;

    const dataTransfer = {
      setData: jest.fn(),
      getData: jest.fn(),
    };

    fireEvent.dragStart(draggable, { dataTransfer });
    expect(draggable).toHaveClass('draggable--dragging');
  });

  it('handles drag end event', () => {
    const { container } = render(
      <DragDropProvider onDragEnd={() => {}}>
        <TestComponent />
      </DragDropProvider>
    );
    const draggable = container.querySelector('.draggable') as HTMLElement;
    const droppable = container.querySelector('.droppable') as HTMLElement;

    const dataTransfer = {
      setData: jest.fn(),
      getData: jest.fn().mockReturnValue('test-id'),
    };

    fireEvent.dragStart(draggable, { dataTransfer });
    expect(draggable).toHaveClass('draggable--dragging');

    fireEvent.dragOver(droppable, { dataTransfer });
    fireEvent.drop(droppable, { dataTransfer });
    expect(draggable).not.toHaveClass('draggable--dragging');
  });

  it('applies custom className prop', () => {
    const { container } = render(
      <DragDropProvider onDragEnd={() => {}}>
        <TestComponent className="custom-draggable" />
      </DragDropProvider>
    );
    const draggable = container.querySelector('.draggable');
    expect(draggable).toHaveClass('draggable');
    expect(draggable).toHaveClass('custom-draggable');
  });
});