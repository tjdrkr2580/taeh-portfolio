import { ModalSection } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const Taeh = () => {
  return (
    <ModalSection>
      <ListUl
        lists={[
          "Vercel & 도메인 배포",
          "SEO 작업 진행 중",
          "폰트 및 이미지 압축으로 인한 렌더링 최적화",
        ]}
      />
    </ModalSection>
  );
};

export default Taeh;
