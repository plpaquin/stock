import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 30px;
`;

const Span = styled.span`
  color: black;
  font-family: 'Comfortaa', cursive;
`;

const StyledInput = styled.input`
  border: 1px solid #999;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  min-height: 40px;
  padding: 0 0.5rem;
`;

export const Input = ({ label, placeholder }) => (
  <Label>
    <Span>{label}</Span>
    <StyledInput autoComplete="off" name="stockSymbol" placeholder={placeholder} type="text" />
  </Label>
);
