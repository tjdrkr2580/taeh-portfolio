import { flexCenterCenter } from "@/styles/mixins";
import styled from "@emotion/styled";

const Logo = () => {
  return <LogoWrapper>Taeh</LogoWrapper>;
};

const LogoWrapper = styled.div`
  background-color: #423830;
  ${flexCenterCenter};
  font-size: 4.5rem;
  font-family: "Mrs Saint Delafield";
  width: 10rem;
  padding: 1rem 0.5rem 0 0;
  height: 10rem;
`;

export default Logo;
