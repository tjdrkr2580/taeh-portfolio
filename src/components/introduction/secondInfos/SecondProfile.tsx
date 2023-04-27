import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import profile from "/public/profile.jpg";

const SecondProfile = () => {
  return (
    <SecondWrapper>
      <Image src={profile} alt="myProfile" placeholder="empty" />
      <SecondProfileTitle>
        <h1>
          훗날, 파도를 만들 개발자가 될 <span>김태현</span>
        </h1>
        <SecondDescription>
          <p className="subtitle">저는,</p>
          <p className="description">
            새로운 파도에 적응하는 개발을 넘어 언젠가 파도를 만들 개발자가
            되기를 희망합니다. 새로운 지식들을 환영하고, 앞서 경험해보며
            고착되지 않으려고 합니다. 스타트업에서 프론트엔드 개발자로 직접
            디자이너와의 협업, 실시간성, 데이터 시각화 등 다양한 경험들을 가지고
            있으며 또 재사용성을 생각하면서 보기 좋은 코드를 작성하려고 합니다.
            현재는 부트캠프에서 여러 프로젝트를 경험해봄으로써 어떤 조직에서든지
            본인의 역할을 수행하기 위해 최선을 다하며 '좋은' 개발자가 되려고
            합니다.
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
  @media (max-width: 600px) {
    flex-direction: column;
  }
  img {
    width: 30rem;
    height: 40rem;
  }
`;

const SecondProfileTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h1 {
    @media (max-width: 934px) {
      font-size: 2rem;
    }
    font-size: 2.7rem;
    font-weight: 700;
  }
  span {
    @media (max-width: 934px) {
      font-size: 2rem;
    }
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
  width: 85%;
  @media (max-width: 600px) {
    width: 95%;
  }
  gap: 2rem;
  .subtitle {
    @media (max-width: 934px) {
      font-size: 2rem;
    }
    font-size: 2.4rem;
    font-weight: 500;
  }
  .description {
    font-size: 1.6rem;
    line-height: 1.75;
  }
`;

export default SecondProfile;
