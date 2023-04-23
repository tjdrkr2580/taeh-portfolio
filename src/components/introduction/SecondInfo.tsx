import styled from "@emotion/styled";
import SecondTitle from "./secondInfos/SecondTitle";
import SecondProfile from "./secondInfos/SecondProfile";
import SecondExperience from "./secondInfos/SecondExperience";
import SecondStack from "./secondInfos/SecondStack";
import SecondProject from "./secondInfos/SecondProject";
import SecondStory from "./secondInfos/SecondStory";
import SecondCert from "./secondInfos/SecondCert";

const SecondInfo = () => {
  return (
    <SecondWrapper>
      <SecondTitle />
      <SecondProfile />
      <SecondStory />
      <SecondStack />
      <SecondExperience />
      <SecondProject />
      <SecondCert />
    </SecondWrapper>
  );
};

const SecondWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 80%;
  @media (max-width: 925px) {
    width: 92.5%;
  }
  max-width: 88rem;
`;

export default SecondInfo;
