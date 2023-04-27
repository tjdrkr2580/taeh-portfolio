import { ModalSection } from "@/styles/mixins";
import ListUl from "@/components/global/ListUl";

const Mark = () => {
  return (
    <ModalSection>
      <ListUl
        lists={[
          "next-mdx-remote, gray-matter를 통한 마크다운 렌더링",
          "SSG, 동적 라우팅 적용",
        ]}
      />
    </ModalSection>
  );
};

export default Mark;
