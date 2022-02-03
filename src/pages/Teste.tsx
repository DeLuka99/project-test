import styled from "styled-components";

export function Teste() {
  return <H1>TESTE 2</H1>;
}

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.whites};
`;
