import styled from "@emotion/styled";
import SecondTitle from "./SecondTitle";
import SecondProfile from "./SecondProfile";
import SecondExperience from "./SecondExperience";
import SecondStack from "./SecondStack";
import SecondProject from "./SecondProject";

const SecondInfo = () => {
  return (
    <SecondWrapper>
      <SecondTitle />
      <SecondProfile />
      <SecondStack />
      <SecondExperience />
      <SecondProject />
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
