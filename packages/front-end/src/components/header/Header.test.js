import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders header', () => {
  render(<Header />);
  const heading = screen.getByText('Stock Market Recommender');
  expect(heading).toBeInTheDocument();
});
