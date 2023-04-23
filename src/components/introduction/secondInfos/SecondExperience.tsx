import ListTitle from "@/components/global/List";
import { Line, ListWrapper, StrongTitle } from "@/styles/mixins";

const SecondExperience = () => {
  return (
    <ListWrapper>
      <Line />
      <StrongTitle>이력</StrongTitle>
      <ListTitle
        title="항해99 - 2023.01 ~ 2023.04"
        stack="12기 프론트엔드 개발자"
        isStack={false}
        desc="React 주특기 과정"
      />
      <ListTitle
        title="eZar - 2022.10 ~ 2023.02"
        isStack={false}
        stack="프론트엔드 개발자 현장실습 및 인턴"
        desc="스타일링 및 유지보수, 기능 개발, 데이터 시각화"
      />
      <ListTitle
        title="마이스터 레벨업 웹 개발 교육반 - 2022.03 ~ 2023.05"
        isStack={false}
        stack="HTML, CSS, JavaScript, PHP 교육 수강"
      />
      <ListTitle
        title="사이버보안 기능반 - 2022.11 ~ 2022.03"
        isStack={false}
        stack="인천전자마이스터고등학교"
        desc="기능경기대회, 경희대 시스코 네트워킹 아카데미 경진대회 은상"
      />
    </ListWrapper>
  );
};

export default SecondExperience;
