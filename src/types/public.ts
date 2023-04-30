import { Theme } from "@emotion/react";
import { ReactNode } from "react";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";

export type headInfoType = {
  title: string;
  description: string;
};

export type layoutType = {
  children?: ReactNode;
};

export type SyntaxProps = SyntaxHighlighterProps & {
  theme?: Theme | undefined;
  [key: string]: any;
};
