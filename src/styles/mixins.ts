import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const logoStyle = css`
  cursor: pointer;
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
