import { ModalSection } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const EzarS = () => {
  return (
    <ModalSection>
      <ListUl
        lists={[
          "Figma와 맞게 HighCharts 디자인 및 구성 변경 - 클라이언트 호평",
          "현재가 클릭 시 mPOP 해당 종목 이동 기능 개발",
          "기능 및 스타일링 유지보수",
          "디자이너와의 협업을 통한 전체 UI 제작",
        ]}
      />
    </ModalSection>
  );
};

export default EzarS;
