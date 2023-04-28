import HeadInfo from "@/components/global/HeadInfo";
import useGetAllPost from "@/hook/useGetAllPost";
import { flexCenterCenter } from "@/styles/mixins";
import { blogProps, fileProps } from "@/types/props";
import styled from "@emotion/styled";

const blog = ({ files }: blogProps) => {
  return (
    <>
      <HeadInfo title="Taeh | 블로그" description="김태현 마크다운 블로그" />
      <BlogWrapper>
        <BlogList>
          {files.map((file: fileProps, index: number) => (
            <li key={index}>
              <h1>{file.data.title}</h1>
              <p>{file.data.date}</p>
            </li>
          ))}
        </BlogList>
      </BlogWrapper>
    </>
  );
};

const BlogWrapper = styled.section`
  margin: 0 auto;
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
