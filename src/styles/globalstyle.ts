import { css } from "@emotion/react";

export const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 10px;
    @media (max-width: 750px) {
      font-size: 7.5px;
    }
    text-decoration: none;
    list-style: none;
    border: none;
    font-family: Pretendard;
  }

  body {
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input {
    padding-left: 0.6rem;
    &:focus {
      outline: none;
    }
  }
`;
