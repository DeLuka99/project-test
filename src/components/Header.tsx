import React from "react";
import styled from "styled-components";

import { D3Icon } from "./IconsComponents/D3Icon";
import { FacebookIcon } from "./IconsComponents/FacebookIcon";
import { MediumIcon } from "./IconsComponents/MediumIcon";
import { TwitterIcon } from "./IconsComponents/TwitterIcon";

function Header() {
  return (
    <Container>
      <RedesSocials>
        <a href="https://twitter.com/deluka99">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/thiago-de-luka-89b596185/">
          <FacebookIcon />
        </a>
        <a href="#">
          <MediumIcon />
        </a>
      </RedesSocials>

      <Logo>
        <IconLogo />
        <Name> Development</Name>
      </Logo>

      <DivMenu>
        <LineOne />
        <LineTwo />
        <LineThree />
      </DivMenu>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 90%;
  max-width: 1080px;
  padding-top: 50px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 420px) {
    padding-top: 30px;
  }
`;

const RedesSocials = styled.div`
  display: flex;
  align-items: center;

  a + a {
    margin-left: 10px;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  padding-left: 10px;
  font-size: 1.5rem;
  margin: 0;
`;

const IconLogo = styled(D3Icon)`
  height: 44.76px;
  width: 44.76px;
`;

const DivMenu = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  flex-shrink: 0;
  border: none;
`;

const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  flex-shrink: 0;
  height: 3px;
  margin: 3px 0;
`;

const LineOne = styled(Line)`
  width: 36px;
`;

const LineTwo = styled(Line)`
  width: 16px;
`;

const LineThree = styled(Line)`
  width: 23px;
`;
