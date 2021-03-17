import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledHeader = styled.header`
  box-sizing: border-box;
  max-width: 900px;
  padding: 0 30px;
  width: 100%;
`;

const Heading = styled.h1`
  color: white;
  font-family: 'Comfortaa', cursive;
`;

export const Header = () => (
  <Container>
    <StyledHeader>
      <Heading>Stock Market Recommender</Heading>
    </StyledHeader>
  </Container>
);
