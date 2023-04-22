import ListTitle from "@/components/global/ListTitle";
import { path } from "@/constant/locationLink";
import { Line, StrongTitle } from "@/styles/mixins";
import styled from "@emotion/styled";

const SecondExperience = () => {
  return (
    <SecondExperienceWrapper>
      <Line />
      <StrongTitle>이력</StrongTitle>
      <ListTitle
        title="항해99 12기 - 2023.01 ~ 2023.04"
        stack="React, Redux, Recoil, React-Query..."
      />
      <ListTitle
        title="eZar (주식회사 이자) - 2022.10 ~ 2023.02"
        stack="React, SCSS, Angular, TypeScript"
      />
      <ListTitle
        title="인천전자마이스터고등학교 사이버보안 기능반 - 2022.11 ~ 2022.03"
        stack="Network, Linux, Packet Tracer, JavaScript"
      />
    </SecondExperienceWrapper>
  );
};

const SecondExperienceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;

export default SecondExperience;
