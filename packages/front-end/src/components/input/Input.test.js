import { render, screen } from '@testing-library/react';
import { Input } from './Input';

const text = 'Stock Ticker Symbol Lookup';

test('renders input label', () => {
  render(<Input label={text} />);
  const input = screen.getByText(text);
  expect(input).toBeInTheDocument();
});
