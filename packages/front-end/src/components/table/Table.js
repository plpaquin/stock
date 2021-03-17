import styled from 'styled-components';

import { useStock } from '../../contexts/stock/stockContext';

const Article = styled.article`
`;

const Heading = styled.h1`
  color: black;
  font-family: 'Comfortaa', cursive;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  color: black;
  font-family: 'Comfortaa', cursive;
  width: 100%;

  td, th {
    border: 1px solid #999;
    padding: 0.5rem;
  }

  td {
    text-align: right;
  }

  th {
    text-align: left;
  }

  tbody tr:nth-child(odd) {
    background-color: #f6f7fb;
  }
`;

const Caption = styled.caption`
  caption-side: bottom;
  font-family: Arial;
  font-size: 14px;
  padding: 0.5rem;
`;

export const Table = () => {
  const { stock } = useStock();

  return (
    <Article>
      {stock && (
        <>
          <Heading>{stock.symbol}</Heading>
          <StyledTable>
            <Caption>{stock.symbol} in the past {stock.history.length} days</Caption>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Price</th>
                <th scope="col">Media Count</th>
                <th scope="col">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {stock && stock.history.map((entry, index) => (
                <tr key={index}>
                  <th scope="row">{entry.date}</th>
                  <td>{new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(entry.price)}</td>
                  <td>{entry.socialMediaCount}</td>
                  <td>{entry.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </>
      )}
    </Article>
  );
};
