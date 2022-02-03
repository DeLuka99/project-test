import styled from "styled-components";

export function Home() {
  return <H1>TESTE</H1>;
}

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.persianGreen};
`;
