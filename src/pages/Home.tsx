import styled from "styled-components";

function Home() {
  return <H1>HOME</H1>;
}

export default Home;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;
