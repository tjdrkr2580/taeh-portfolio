import Content from "@/components/blog/Content";
import HeadInfo from "@/components/global/HeadInfo";
import getAllPost from "@/hook/getAllPost";
import { flexCenterCenter, pageMarginStyle } from "@/styles/mixins";
import { blogProps, fileProps } from "@/types/props";
import styled from "@emotion/styled";

const blog = ({ files }: blogProps) => {
  return (
    <>
      <HeadInfo title="Taeh | 블로그" description="김태현 마크다운 블로그" />
      <BlogWrapper>
        <BlogList>
          {files.map((file: fileProps, index: number) => (
            <Content file={file} key={index} />
          ))}
        </BlogList>
      </BlogWrapper>
    </>
  );
};

const BlogWrapper = styled.section`
  margin: auto;
  ${pageMarginStyle}
  width: 80%;
  @media (max-width: 925px) {
    width: 92.5%;
  }
  max-width: 88rem;
  min-height: 100vh;
  ${flexCenterCenter};
`;

const BlogList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  a {
    width: 99%;
    height: 22rem;
  }
`;

export default blog;

export async function getStaticProps() {
  const files = getAllPost();
  return {
    props: {
      files,
    },
  };
}
