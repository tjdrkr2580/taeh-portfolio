import styled from "@emotion/styled";
import SecondTitle from "./secondInfos/SecondTitle";
import SecondProfile from "./secondInfos/SecondProfile";
import SecondExperience from "./secondInfos/SecondExperience";
import SecondStack from "./secondInfos/SecondStack";
import SecondProject from "./secondInfos/SecondProject";
import SecondStory from "./secondInfos/SecondStory";
import SecondCert from "./secondInfos/SecondCert";
import { pageWidthStyle } from "@/styles/mixins";

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
  ${pageWidthStyle};
`;

export default SecondInfo;
