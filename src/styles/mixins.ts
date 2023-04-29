import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const logoStyle = css`
  margin-top: 1rem;
  font-size: 4rem;
  font-family: "Mrs Saint Delafield", cursive;
  font-weight: 400;
`;

export const pageMarginStyle = css`
  padding: 15rem 0 14rem 0;
`;

export const flexCenterCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background: ${(props) => props.theme.primaryColor};
`;

export const LocationLink = styled.a`
  color: ${(props) => props.theme.primaryColor};
  font-size: 2rem;
  text-decoration: underline;
`;

export const StrongTitle = styled.h1`
  font-size: 2.8rem;
  color: ${(props) => props.theme.strongColor};

  .logo {
    font-size: 3.9rem;
    font-family: "Mrs Saint Delafield";
  }
`;

export const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;

export const ErrorWrapper = styled.section`
  height: 100vh;
  ${flexCenterCenter};
  font-size: 2.5rem;
`;

export const ModalSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2rem;
`;

export const TagWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const pageWidthStyle = css`
  width: 80%;
  @media (max-width: 925px) {
    width: 92.5%;
  }
  max-width: 88rem;
`;
