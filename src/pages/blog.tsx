import HeadInfo from "@/components/global/HeadInfo";
import useGetAllPost from "@/hook/useGetAllPost";
import { ErrorWrapper } from "@/styles/mixins";
import styled from "@emotion/styled";

const blog = ({ files }: any) => {
  console.log(files);
  return (
    <>
      <HeadInfo title="" description="" />
      <BlogWrapper>
        <ErrorWrapper>
          현재 마크다운 블로그는 개발 중에 있습니다, 감사합니다
        </ErrorWrapper>
      </BlogWrapper>
    </>
  );
};

const BlogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default blog;

export async function getStaticProps() {
  const files = useGetAllPost();
  return {
    props: {
      files,
    },
  };
}
