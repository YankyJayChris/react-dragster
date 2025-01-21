import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Draggable } from '../Draggable';
import { DragDropProvider } from '../DragDropContext';

describe('Draggable', () => {
  const TestComponent = () => (
    <Draggable id="test-id">
      <div>Drag me</div>
    </Draggable>
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
    const draggable = container.firstChild;
    expect(draggable).toHaveAttribute('draggable', 'true');
  });

  it('handles drag start event', () => {
    const { container } = render(
      <DragDropProvider onDragEnd={() => {}}>
        <TestComponent />
      </DragDropProvider>
    );
    const draggable = container.firstChild as HTMLElement;
    
    // Create a mock dataTransfer object
    const dataTransfer = {
      setData: jest.fn(),
      getData: jest.fn(),
    };
    
    fireEvent.dragStart(draggable, { dataTransfer });
    expect(draggable).toHaveStyle({ opacity: '0.8' });
  });

  it('handles drag end event', () => {
    const { container } = render(
      <DragDropProvider onDragEnd={() => {}}>
        <TestComponent />
      </DragDropProvider>
    );
    const draggable = container.firstChild as HTMLElement;
    fireEvent.dragEnd(draggable);
    expect(draggable).toHaveStyle({ opacity: '1' });
  });
});
