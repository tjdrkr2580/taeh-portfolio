import { ModalSection, StrongTitle } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const EzarK = () => {
  return (
    <ModalSection>
      <StrongTitle>국내상장 이자</StrongTitle>
      <ListUl
        lists={[
          "백엔드 API를 통한 데이터 시각화",
          "woff, App을 사용해서 폰트 최적화로 약 0.2초 렌더링 감소",
          "전체 UI 및 기능 개발",
        ]}
      />
    </ModalSection>
  );
};

export default EzarK;
