// src/__tests__/Droppable.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Droppable } from '../Droppable';
import { DragDropProvider } from '../DragDropContext';

describe('Droppable', () => {
  const mockOnDragEnd = jest.fn();

  beforeEach(() => {
    mockOnDragEnd.mockClear();
  });

  it('renders children correctly', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <Droppable id="drop-1">
          <div>Test Child</div>
        </Droppable>
      </DragDropProvider>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('handles drag over and drag leave', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <Droppable id="drop-1">
          <div>Droppable Content</div>
        </Droppable>
      </DragDropProvider>
    );

    const droppable = screen.getByText('Droppable Content').parentElement!;
    
    fireEvent.dragOver(droppable);
    expect(droppable).toHaveStyle({ border: '2px dashed #007bff' });

    fireEvent.dragLeave(droppable);
    expect(droppable).toHaveStyle({ border: '2px dashed transparent' });
  });

  it('handles drop event', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <Droppable id="drop-1">
          <div>Drop Here</div>
        </Droppable>
      </DragDropProvider>
    );

    const droppable = screen.getByText('Drop Here').parentElement!;
    
    fireEvent.dragOver(droppable);
    fireEvent.drop(droppable);

    expect(droppable).toHaveStyle({ border: '2px dashed transparent' });
    expect(mockOnDragEnd).toHaveBeenCalledWith(expect.any(Object));
  });

  it('prevents default on drag over', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <Droppable id="drop-1">
          <div>Drop Here</div>
        </Droppable>
      </DragDropProvider>
    );

    const droppable = screen.getByText('Drop Here').parentElement!;
    const mockEvent = { preventDefault: jest.fn() };
    
    fireEvent.dragOver(droppable, mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it('prevents default on drop', () => {
    render(
      <DragDropProvider onDragEnd={mockOnDragEnd}>
        <Droppable id="drop-1">
          <div>Drop Here</div>
        </Droppable>
      </DragDropProvider>
    );

    const droppable = screen.getByText('Drop Here').parentElement!;
    const mockEvent = { preventDefault: jest.fn() };
    
    fireEvent.drop(droppable, mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});