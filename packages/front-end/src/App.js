import { StockProvider } from './contexts/stock/stockContext';

import { Container } from './components/container/Container';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Form } from './components/form/Form';
import { Table } from './components/table/Table';
import { Chart } from './components/chart/Chart';

export const App = () => (
  <StockProvider>
    <Container>
      <Header />
      <Main>
        <Form />
        <Table />
        <Chart />
      </Main>
    </Container>
  </StockProvider>
);
