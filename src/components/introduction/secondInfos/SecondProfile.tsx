import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import Profile from "../../../assets/img/profile.webp";
import { Line } from "@/styles/mixins";

const SecondProfile = () => {
  return (
    <SecondWrapper>
      <Image src={Profile} width={300} height={400} alt="myProfile" />
      <SecondProfileTitle>
        <h1>
          파도를 만들 개발자가 될 <span>김태현</span>
        </h1>
        <SecondDescription>
          <p className="subtitle">훗날,</p>
          <p className="description">
            새로이 들어오는 파도에 적응하는 개발을 넘어 언젠가 파도를 만들
            개발자가 되기를 원합니다.
          </p>
        </SecondDescription>
      </SecondProfileTitle>
    </SecondWrapper>
  );
};

const SecondWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  align-items: center;
  gap: 4rem;
`;

const SecondProfileTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
  }

  span {
    font-size: 2.8rem;
    font-weight: 700;
    width: fit-content;
    padding: 0 0.15rem;
    background-color: ${(props) => props.theme.strongColor};
  }
`;

const SecondDescription = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 80%;
  gap: 2rem;
  .subtitle {
    font-size: 2.4rem;
    font-weight: 500;
  }

  .description {
    font-size: 1.8rem;
    line-height: 1.5;
  }
`;

export default SecondProfile;
