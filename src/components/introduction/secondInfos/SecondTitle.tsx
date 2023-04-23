import styled from "@emotion/styled";
import React from "react";
import logo from "../../../../public/logo.jpg";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { Line } from "@/styles/mixins";
import { path } from "@/constant/locationLink";
import { LocationLink } from "../../../styles/mixins";
import { logoFlyAnimation } from "@/styles/animation/keyframe";

const SecondTitle = () => {
  return (
    <SecondTitleWrapper>
      <Image
        width={125}
        height={130}
        src={logo}
        alt="logo"
        className="logo"
        placeholder="empty"
      />
      <h1>김태현 | Taeh</h1>
      <ul>
        <li>인천전자마이스터고등학교 정보통신과 졸업 (2023.01.)</li>
        <li>
          <FiMail size={20} />
          tjdrkr2580@naver.com
        </li>
        <li>
          <BiPhoneCall size={20} />
          010-9688-6780
        </li>
        <li>
          <SiKakaotalk size={22} />
          tjdrkr2580
        </li>
        <li>
          <FaGithubSquare size={24} />
          <LocationLink
            href={path.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Taeh
          </LocationLink>
        </li>
      </ul>
      <Line />
    </SecondTitleWrapper>
  );
};

const SecondTitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  .logo {
    animation: ${logoFlyAnimation} 5s ease-in-out infinite forwards;
  }
  img {
    @media (max-width: 500px) {
      width: 9rem;
      height: 9rem;
    }
    border-radius: 0.4rem;
  }
  h1 {
    font-size: 3.2rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    li {
      svg {
        width: 2rem;
        margin-right: 0.8rem;
      }
      font-size: 1.75rem;
      display: flex;
      align-items: center;
      font-weight: 500;
      a {
        font-size: 1.75rem !important;
      }
    }
  }
`;

export default SecondTitle;
