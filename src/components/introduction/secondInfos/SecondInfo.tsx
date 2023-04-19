import styled from "@emotion/styled";
import SecondTitle from "./SecondTitle";

const SecondInfo = () => {
  return (
    <SecondWrapper>
      <SecondTitle />
    </SecondWrapper>
  );
};

const SecondWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 80%;
  max-width: 96rem;
  height: 100vh;
`;

export default SecondInfo;
