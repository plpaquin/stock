import { DateTime } from 'luxon';
import styled from 'styled-components';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

import { useStock } from '../../contexts/stock/stockContext';

const Container = styled(ResponsiveContainer)`
  font-family: Arial;
  font-size: 14px;
  min-height: 400px;  
`;

export const Chart = () => {
  const { stock } = useStock();

  let stockData;

  if (stock) {
    stockData = stock.history.map((entry) => ({
      name: DateTime.fromISO(entry.date).toLocaleString(DateTime.DATE_SHORT),
      price: entry.price,
      media: entry.socialMediaCount,
      change: entry.change
    }));

    return (
      <Container>
        <LineChart data={stockData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          {stockData.map((entry) => entry.change ? <ReferenceLine key={entry.name} x={entry.name} stroke="#165c7d" label="Change" /> : null)}
          <Line type="monotone" dataKey="price" stroke="#0094d2" />
          <Line type="monotone" dataKey="media" stroke="#999" />
        </LineChart>
      </Container>
    );
  }

  return (<></>);
};
