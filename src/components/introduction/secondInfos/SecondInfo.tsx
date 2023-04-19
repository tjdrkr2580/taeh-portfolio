import styled from "@emotion/styled";
import SecondTitle from "./SecondTitle";
import SecondProfile from "./SecondProfile";

const SecondInfo = () => {
  return (
    <SecondWrapper>
      <SecondTitle />
      <SecondProfile />
    </SecondWrapper>
  );
};

const SecondWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 80%;
  max-width: 88rem;
  height: 100vh;
`;

export default SecondInfo;
