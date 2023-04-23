import styled from "@emotion/styled";

const Desc = ({ desc }: { desc: string }) => {
  return <DescWrapper>{desc}</DescWrapper>;
};

const DescWrapper = styled.p`
  width: 80%;
  font-size: 1.8rem;
  line-height: 1.53;
  color: ${(props) => props.theme.primaryColor};
`;

export default Desc;
