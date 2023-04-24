import { ModalSection } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const Air = () => {
  return (
    <ModalSection>
      <ListUl
        lists={[
          "렌더링 시간 및 인피니티 스크롤 도입",
          "예외 처리를 위해 캘린더의 이전 날짜 선택 불가 기능 도입",
          "동적인 1박 * 가격 로직 개발",
          "태그 분류, 검색 필터 기능 추가",
        ]}
      />
    </ModalSection>
  );
};

export default Air;
