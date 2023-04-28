import { ModalSection } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const Taeh = () => {
  return (
    <ModalSection>
      <ListUl
        lists={[
          "Vercel & 도메인 배포",
          "SEO 작업 진행 중",
          "gray-matter, next-mdx-remote를 통한 마크다운 렌더링",
          "추가적인 렌더링을 하지 않아 SSG를 통해 개발",
          "fs, path를 통한 파일 접촉",
          "폰트 및 이미지 압축으로 인한 렌더링 최적화",
        ]}
      />
    </ModalSection>
  );
};

export default Taeh;
