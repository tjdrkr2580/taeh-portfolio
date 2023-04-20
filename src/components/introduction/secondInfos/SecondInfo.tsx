import styled from "@emotion/styled";
import SecondTitle from "./SecondTitle";
import SecondProfile from "./SecondProfile";
import SecondExperience from "./SecondExperience";

const SecondInfo = () => {
  return (
    <SecondWrapper>
      <SecondTitle />
      <SecondProfile />
      <SecondExperience />
    </SecondWrapper>
  );
};

const SecondWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 80%;
  max-width: 88rem;
`;

export default SecondInfo;
