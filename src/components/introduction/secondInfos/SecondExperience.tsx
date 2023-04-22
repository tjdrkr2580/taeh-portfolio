import ListTitle from "@/components/global/List";
import { Line, ListWrapper, StrongTitle } from "@/styles/mixins";
import styled from "@emotion/styled";

const SecondExperience = () => {
  return (
    <ListWrapper>
      <Line />
      <StrongTitle>이력</StrongTitle>
      <ListTitle
        title="항해99 - 2023.01 ~ 2023.04"
        stack="12기 프론트엔드 개발자"
        isStack={false}
      />
      <ListTitle
        title="eZar - 2022.10 ~ 2023.02"
        isStack={false}
        stack="프론트엔드 개발자 현장실습 및 인턴"
      />
      <ListTitle
        title="사이버보안 기능반 - 2022.11 ~ 2022.03"
        isStack={false}
        stack="인천전자마이스터고등학교"
      />
    </ListWrapper>
  );
};

export default SecondExperience;
