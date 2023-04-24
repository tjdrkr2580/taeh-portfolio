import { ModalSection } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const Taeh = () => {
  return (
    <ModalSection>
      <ListUl
        lists={[
          "렌더링 최적화를 위한 이미지 압축, 폰트 파일 사용",
          "App 컴포넌트를 사용하여 최초 한번만 폰트 요청",
        ]}
      />
    </ModalSection>
  );
};

export default Taeh;
