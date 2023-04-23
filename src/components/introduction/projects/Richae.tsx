import { ModalSection, StrongTitle } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const Richae = () => {
  return (
    <ModalSection>
      <StrongTitle>Richae</StrongTitle>
      <ListUl
        lists={[
          "데이터 구조화시켜 흥미를 유발 - HighCharts 채택",
          "데이터의 타입을 관리하기 위해서 TypeScript 채택",
          "무료 멤버쉽으로 인한 Request 한계 -> 뉴스를 받아옴으로써 머무는 시간 15초~ 20초 증가",
          "Polygon을 제외한 무료 멤버쉽 API 2개와 같이 사용함으로써 1분에 최대 3번까지 확인 가능",
        ]}
      />
    </ModalSection>
  );
};

export default Richae;
