import ListTitle from "@/components/global/ListTitle";
import { Line, StrongTitle } from "@/styles/mixins";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import reactImg from "@/assets/img/react.svg";

const SecondStack = () => {
  return (
    <SecondStackWrapper>
      <Line />
      <StrongTitle>스택</StrongTitle>
      <StackWrapper>
        <ListTitle title="프론트엔드" isStack={false} />
        <FrontEndImages>
          <Image width={40} height={40} alt="react" src={reactImg} />
        </FrontEndImages>
      </StackWrapper>
      <StackWrapper>
        <ListTitle title="백엔드" isStack={false} />
        <FrontEndImages>
          {/* <Image width={40} height={40} alt="react" src={reactImg} /> */}
        </FrontEndImages>
      </StackWrapper>
      <ListTitle
        title="작업 도구"
        isStack={false}
        stack={"Notion, Slack, Jira"}
      />
    </SecondStackWrapper>
  );
};

const SecondStackWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StackWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const FrontEndImages = styled.section`
  width: 100%;
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export default SecondStack;
