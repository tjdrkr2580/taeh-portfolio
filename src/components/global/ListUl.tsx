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
  list-style: circle;

  li {
    font-size: 1.65rem;
  }
`;

ListUl.defaultProps = {
  desc: [],
};

export default ListUl;
