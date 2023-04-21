import ListTitle from "@/components/global/ListTitle";
import { Line, StrongTitle } from "@/styles/mixins";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import reactImg from "@/assets/img/react.svg";
import recoilImg from "@/assets/img/recoil.svg";
import reduxImg from "@/assets/img/redux-icon.svg";
import scssImg from "@/assets/img/scss.svg";
import tsImg from "@/assets/img/typescript-icon.svg";
import nextImg from "@/assets/img/nextjs.svg";

const SecondStack = () => {
  return (
    <SecondStackWrapper>
      <Line />
      <StrongTitle>스택</StrongTitle>
      <StackWrapper>
        <ListTitle title="프론트엔드" isStack={false} />
        <FrontEndImages>
          <Image
            width={40}
            height={40}
            alt="react"
            src={reactImg}
            placeholder="empty"
          />
          <Image
            width={40}
            height={40}
            alt="next"
            src={nextImg}
            placeholder="empty"
          />
          <Image
            width={40}
            height={40}
            alt="ts"
            src={tsImg}
            placeholder="empty"
          />
          <Image
            width={40}
            height={40}
            alt="redux"
            src={reduxImg}
            placeholder="empty"
          />
          <Image
            width={40}
            height={40}
            alt="scss"
            src={scssImg}
            placeholder="empty"
          />
          <Image
            width={40}
            height={40}
            alt="recoil"
            src={recoilImg}
            placeholder="empty"
          />
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
  gap: 3rem;
`;

const StackWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const FrontEndImages = styled.section`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    cursor: pointer;
    &:last-child {
      border-radius: 50%;
      padding: 0.55rem;
      background-color: white;
    }
  }
`;

export default SecondStack;
