import styled from 'styled-components';

import { useStock } from '../../contexts/stock/stockContext';

import { getStock }  from '../../sdk';

import { Input } from '../input/Input';
import { Button } from '../button/Button';

const StyledForm = styled.form`
  align-items: flex-end;
  display: flex;
  margin: 30px 0;
  width: 100%;
`;

export const Form = () => {
  const { setStock } = useStock();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const value = data.stockSymbol;

    if (value !== '') {
      getStock(value, 10).then((response) => setStock(response.data));
    } else {
      setStock(undefined);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input label="Stock Ticker Symbol Lookup" placeholder="" />
      <Button type="submit">Search</Button>
    </StyledForm>
  );
};
