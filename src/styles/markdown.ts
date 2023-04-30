import { css } from "@emotion/react";

export const markdownStyle = css`
  p {
    line-height: 1.65;
    font-size: 1.8rem;
    word-wrap: break-word;
  }
  h1 {
    padding: 2rem 0;
    font-size: 3rem;
    &::after {
      content: "";
      display: block;
      position: relative;
      top: 0.33em;
      border-bottom: 0.3rem solid #dc5351;
    }
  }

  h2 {
    padding: 2rem 0;
    font-size: 2.7rem;
    line-height: 1.45;
    &::after {
      content: "";
      display: block;
      position: relative;
      top: 0.33em;
      border-bottom: 0.3rem solid #dc5351;
    }
  }
  h3 {
    padding: 2rem 0;
    font-size: 2.4rem;
    line-height: 1.45;
    &::after {
      content: "";
      display: block;
      position: relative;
      top: 0.33em;
      border-left: 0.3rem solid #dc5351;
    }
  }

  h4 {
    font-size: 2.1rem;
    line-height: 1.45;
  }

  img {
    margin: 2rem 0;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  code {
    background-color: #a5a5a5;
    border-radius: 0.6rem;
    padding: 0.1rem 0.8rem;
    width: fit-content;
    font-size: 1.6rem;
  }

  blockquote {
    margin: 2rem 0;
    width: 100%;
    padding-left: 1.25rem;
    border-left: 0.3rem solid #dc5351;
    p {
      line-height: 1.5;
    }
  }

  pre {
    margin: 2rem 0;
    width: 100%;
    background-color: #161b22;
    border-radius: 0.6rem;
    padding: 2rem;
    code {
      white-space: pre-wrap;
      line-height: 1.3;
      display: inline-block;
      width: 100%;
      word-wrap: break-word;
      background: transparent;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 2rem 0;
    li {
      list-style: disc;
      font-size: 1.7rem;
      display: flex;
      gap: 0.8rem;
      line-height: 1.3;
    }
  }

  strong {
    font-size: 1em;
  }

  ol {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 2rem 0;
    list-style: decimal !important;
    li {
      list-style: decimal !important;
      font-size: 1.7rem;
      display: flex;
      gap: 0.8rem;
      line-height: 1.1;
    }
  }
`;
