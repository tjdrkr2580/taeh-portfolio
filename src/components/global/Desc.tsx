import styled from "@emotion/styled";
import React from "react";

const Desc = ({ desc }: { desc: string }) => {
  return <DescWrapper>{desc}</DescWrapper>;
};

const DescWrapper = styled.p`
  font-size: 1.7rem;
`;

export default Desc;
