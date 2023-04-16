import styled from "@emotion/styled";
import React from "react";
import Logo from "../global/Logo";
import { flexCenterCenter } from "@/styles/mixins";

const FirstInfo = () => {
  return (
    <FirstInforWrapper>
      <p>
        새로운 기술을 탐색하는 <span className="primary">개발자</span>
      </p>
      <p>
        새로운 배움을 좋아하는 <span className="primary">개발자</span>
      </p>
      <p>
        새로운 경험을 희망하는 <span className="primary">개발자</span>
      </p>
    </FirstInforWrapper>
  );
};

const FirstInforWrapper = styled.section`
  width: 90%;
  max-width: 128rem;
  flex-direction: column;
  gap: 35rem;
  p {
    font-size: 4rem;
    font-weight: 700;
  }
  .primary {
    font-size: 4rem;
    color: ${(props) => props.theme.strongColor};
  }
  ${flexCenterCenter};
`;

export default FirstInfo;
