import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { logoStyle } from "@/styles/mixins";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Taeh</h1>
      <HeaderLinkList>
        <li>
          <Link href={`/`}>소개</Link>
        </li>
        <li>
          <Link href={`/blog`}>블로그</Link>
        </li>
      </HeaderLinkList>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.section`
  position: fixed;
  width: 100vw;
  height: 7rem;
  padding: 1rem 0;
  display: flex;
  z-index: 999;
  align-items: center;
  justify-content: space-around;
  backdrop-filter: blur(0.4rem);
  h1 {
    ${logoStyle};
  }
`;

const HeaderLinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  li {
    a {
      font-size: 1.45rem;
    }
  }
`;

export default Header;
