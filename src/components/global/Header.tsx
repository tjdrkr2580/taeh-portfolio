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
  width: 100vw;
  height: 6rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
