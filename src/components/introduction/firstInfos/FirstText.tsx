import styled from "@emotion/styled";

const FirstText = () => {
  return (
    <FirstTextWrapper>
      <p>저는 김태현입니다.</p>
    </FirstTextWrapper>
  );
};

const FirstTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export default FirstText;
