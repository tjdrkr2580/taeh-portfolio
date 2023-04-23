import ListTitle from "@/components/global/List";
import { Line, ListWrapper, StrongTitle } from "@/styles/mixins";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import reactImg from "@/assets/svgs/react.svg";
import recoilImg from "@/assets/svgs/recoil.svg";
import reduxImg from "@/assets/svgs/redux-icon.svg";
import scssImg from "@/assets/svgs/scss.svg";
import tsImg from "@/assets/svgs/typescript-icon.svg";
import nextImg from "@/assets/svgs/nextjs.svg";
import queryImg from "@/assets/svgs/react-query.svg";
import prImg from "@/assets/svgs/prisma.svg";
import nestImg from "@/assets/svgs/nest.svg";
import mongoImg from "@/assets/svgs/mongodb.svg";
import awsImg from "@/assets/svgs/aws.svg";

const SecondStack = () => {
  return (
    <ListWrapper>
      <Line />
      <StrongTitle>스택</StrongTitle>
      <StackWrapper>
        <ListTitle title="메인 스택" isStack={false} />
        <StackImages>
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
            alt="react-query"
            src={queryImg}
            placeholder="empty"
          />
          <Image
            width={40}
            height={40}
            alt="recoil"
            className="notTransparent"
            src={recoilImg}
            placeholder="empty"
          />
        </StackImages>
        <p>업무에서 사용 가능한 기술 스택입니다.</p>
      </StackWrapper>
      <StackWrapper>
        <ListTitle title="서브 스택" isStack={false} />
        <StackImages>
          <Image
            width={40}
            height={40}
            alt="nestjs"
            src={nestImg}
            placeholder="empty"
          />
          <Image
            width={40}
            height={40}
            alt="mongodb"
            src={mongoImg}
            placeholder="empty"
          />
          <Image
            width={40}
            height={40}
            alt="prisma"
            src={prImg}
            placeholder="empty"
          />
          <Image
            width={40}
            height={40}
            alt="aws"
            src={awsImg}
            placeholder="empty"
          />
        </StackImages>
        <p>경험한 적이 있는 기술 스택입니다.</p>
      </StackWrapper>
    </ListWrapper>
  );
};

const StackWrapper = styled.section`
  display: flex;
  flex-direction: column;
  p {
    padding: 1.5rem 0 0 0;
    font-size: 1.5rem;
  }
`;

const StackImages = styled.section`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;

  .notTransparent {
    border-radius: 50%;
    padding: 0.55rem;
    background-color: white;
  }

  img {
    cursor: pointer;
    transition: 0.25s transform;
    &:hover {
      transform: translateY(-1rem);
    }
  }
`;

export default SecondStack;
