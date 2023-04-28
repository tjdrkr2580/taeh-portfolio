import styled from "@emotion/styled";
import React from "react";

const Tag = ({ tag }: { tag: string }) => {
  return <TagWrapper>{tag}</TagWrapper>;
};

const TagWrapper = styled.li`
  width: fit-content;
  height: 2.8rem;
  padding: 0.5rem 1.2rem;
  border: 0.14rem solid ${(props) => props.theme.strongColor};
  border-radius: 0.4rem;
  font-size: 1.4rem;
  transition: 0.25s background;
  &:hover {
    background: ${(props) => props.theme.strongColor};
  }
`;

export default Tag;
