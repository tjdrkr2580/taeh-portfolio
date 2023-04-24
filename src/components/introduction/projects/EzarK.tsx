import { ModalSection } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const EzarK = () => {
  return (
    <ModalSection>
      <ListUl
        lists={[
          "백엔드 API를 통한 데이터 시각화",
          "woff, App을 사용해서 폰트 최적화로 약 0.2초 렌더링 감소",
          "디자이너와의 협업을 통한 전체 UI 제작",
        ]}
      />
    </ModalSection>
  );
};

export default EzarK;
