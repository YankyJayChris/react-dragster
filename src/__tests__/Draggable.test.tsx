import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Draggable } from '../Draggable';
import { DragDropProvider } from '../DragDropContext';

describe('Draggable', () => {
  const mockOnDragEnd = jest.fn();

  beforeEach(() => {
    mockOnDragEnd.mockClear();
  });

  it('renders children correctly', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <Draggable id="drag-1">
          <div>Drag Me</div>
        </Draggable>
      </DragDropProvider>
    );

    expect(screen.getByText('Drag Me')).toBeInTheDocument();
  });

  it('has draggable attributes', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <Draggable id="drag-1">
          <div>Drag Me</div>
        </Draggable>
      </DragDropProvider>
    );

    const draggable = screen.getByText('Drag Me').parentElement!;
    expect(draggable).toHaveAttribute('draggable', 'true');
  });
});
