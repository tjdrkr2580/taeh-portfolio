import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { logoStyle } from "@/styles/mixins";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href={`/`}>
        <h1>Taeh</h1>
      </Link>
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
  li {
    width: fit-content;
    height: 3rem;
  }
  a {
    padding: 0.4rem 0.8rem;
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
