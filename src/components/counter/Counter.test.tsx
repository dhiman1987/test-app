import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('renders initial count and buttons', () => {
    render(<Counter />);

    const count = screen.getByTestId('count');
    const incBtn = screen.getByTestId('increment-btn');
    const decBtn = screen.getByTestId('decrement-btn');
    const message = screen.queryByTestId('message');

    expect(count).not.toBeNull();
    expect(count.textContent).toBe('0');

    expect(incBtn).not.toBeNull();
    expect(decBtn).not.toBeNull();

    expect(message?.textContent).toBe('Change counter from 0 to 10');
  });

  it('increments and shows upper limit message at 10', () => {
    render(<Counter />);
    const incBtn = screen.getByTestId('increment-btn');

    for (let i = 0; i < 11; i++) {
      fireEvent.click(incBtn);
    }

    const count = screen.getByTestId('count');
    const message = screen.getByTestId('message');

    expect(count).not.toBeNull();
    expect(count.textContent).toBe('10');

    expect(message).not.toBeNull();
    expect(message.textContent?.toLowerCase().includes('counter reached maximum value')).toBe(true);
  });

  it('decrements and shows lower limit message at 0', () => {
    render(<Counter />);
    const decBtn = screen.getByTestId('decrement-btn');
    fireEvent.click(decBtn); // assuming it starts at 0

    const count = screen.getByTestId('count');
    const message = screen.getByTestId('message');

    expect(count).not.toBeNull();
    expect(count.textContent).toBe('0');

    expect(message).not.toBeNull();
    expect(message.textContent?.toLowerCase().includes('counter reached minimum value')).toBe(true);
  });
});
