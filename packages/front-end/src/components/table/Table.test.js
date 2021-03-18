import { render, screen } from '@testing-library/react';
import { Table } from './Table';

test('renders app container', () => {
  render(<Table />);
  const dataTableArticle = screen.getByTestId('data-table-article');
  expect(dataTableArticle).toBeInTheDocument();
});
