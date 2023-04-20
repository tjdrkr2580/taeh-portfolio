import ListTitle from "@/components/global/ListTitle";
import { path } from "@/constant/locationLink";
import { Line } from "@/styles/mixins";
import styled from "@emotion/styled";

const SecondExperience = () => {
  return (
    <SecondExperienceWrapper>
      <Line />
      <h1>이력</h1>
      <ListTitle
        title="인천전자마이스터고등학교 사이버보안 기능반 - 2022.11 ~ 2022.03"
        stack="컴퓨터 네트워크, JavaScript"
      />
      <ListTitle
        title="eZar (주식회사 이자) - 2022.10 ~ 2023.02"
        stack="React, SCSS, Angular, TypeScript"
        href={true}
        link={path.ezar}
      />
      <ListTitle
        title="항해99 12기 - 2023.01 ~ 2023.04"
        stack="React, Redux, Recoil, React-Query..."
      />
    </SecondExperienceWrapper>
  );
};

const SecondExperienceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  h1 {
    font-size: 2.8rem;
    color: ${(props) => props.theme.strongColor};
  }
`;

export default SecondExperience;
