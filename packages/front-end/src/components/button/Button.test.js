import { render, screen } from '@testing-library/react';
import { Button } from './Button';

const text = 'Search';

test('renders button', () => {
  render(<Button children={text} />);
  const button = screen.getByText(text);
  expect(button).toBeInTheDocument();
});
