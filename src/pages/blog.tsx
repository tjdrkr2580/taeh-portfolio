import { ErrorWrapper } from "@/styles/mixins";
import styled from "@emotion/styled";

const blog = () => {
  return (
    <BlogWrapper>
      <ErrorWrapper>
        현재 마크다운 블로그는 개발 중에 있습니다, 감사합니다
      </ErrorWrapper>
    </BlogWrapper>
  );
};

const BlogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default blog;
