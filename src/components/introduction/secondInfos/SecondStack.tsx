import ListTitle from "@/components/global/List";
import { Line, ListWrapper, StrongTitle } from "@/styles/mixins";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import reactImg from "@/assets/img/react.svg";
import recoilImg from "@/assets/img/recoil.svg";
import reduxImg from "@/assets/img/redux-icon.svg";
import scssImg from "@/assets/img/scss.svg";
import tsImg from "@/assets/img/typescript-icon.svg";
import nextImg from "@/assets/img/nextjs.svg";
import queryImg from "@/assets/img/react-query.svg";
import prImg from "@/assets/img/prisma.svg";
import nestImg from "@/assets/img/nest.svg";
import mongoImg from "@/assets/img/mongodb.svg";
import awsImg from "@/assets/img/aws.svg";

const SecondStack = () => {
  return (
    <ListWrapper>
      <Line />
      <StrongTitle>스택</StrongTitle>
      <StackWrapper>
        <ListTitle title="주 스택" isStack={false} />
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
        <p>주로 사용하는 기술 스택입니다.</p>
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
