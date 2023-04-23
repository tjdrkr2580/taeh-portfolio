import styled from "@emotion/styled";
import React from "react";

const ListUl = ({ lists }: { lists: string[] }) => {
  return (
    <UlWrapper>
      {lists.map((list, i) => (
        <li key={i}>{list}</li>
      ))}
    </UlWrapper>
  );
};

const UlWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  li {
    list-style: circle;
    font-size: 1.65rem;
    line-height: 1.25;
  }
`;

ListUl.defaultProps = {
  desc: [],
};

export default ListUl;
