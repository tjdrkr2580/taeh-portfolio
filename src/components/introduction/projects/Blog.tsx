import { ModalSection } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const Blog = () => {
  return (
    <ModalSection>
      <ListUl
        lists={[
          "Next 13을 활용한 App Route, SSR",
          "woff2, next/fonts를 이용한 폰트 최적화",
          "MySQL, Prisma, Nest를 이용한 백엔드 개발 진행 중",
          "React Markdown, remark, rehype 등을 이용한 마크다운 렌더링",
          "JWT를 통한 로그인 후 CRUD 권한 부여",
          "React -> Preact로 전환하여 번들러 사이즈 감소 작업 예정",
        ]}
      />
    </ModalSection>
  );
};

export default Blog;
