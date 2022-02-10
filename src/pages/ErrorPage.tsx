import styled from "styled-components";

function ErrorPage() {
  return <H1>ERROR 404</H1>;
}

export default ErrorPage;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;
