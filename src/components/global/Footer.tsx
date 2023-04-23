import styled from "@emotion/styled";
import React from "react";

const Footer = () => {
  return (
    <FooterWrapper>
      @ {new Date().getFullYear()}
      <span className="logo">Taeh</span>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.section`
  display: flex;
  height: 6rem;
  width: 100vw;
  align-items: center;
  font-size: 1.75rem;
  justify-content: center;

  .logo {
    padding: 0.7rem 0 0 1.2rem;
    font-size: 2.8rem;
    font-family: "Mrs Saint Delafield";
  }
`;

export default Footer;
