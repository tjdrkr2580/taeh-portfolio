import styled from "@emotion/styled";
import React from "react";
import Logo from "../../../assets/img/logo.jpeg";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

const SecondTitle = () => {
  return (
    <SecondTitleWrapper>
      <Image
        width={125}
        height={130}
        src={Logo}
        alt="logo"
        placeholder="blur"
      />
      <h1>김태현 | Taeh</h1>
      <ul>
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
          <a
            href="https://github.com/tjdrkr2580"
            target="_blank"
            rel="noopener noreferrer"
          >
            Taeh
          </a>
        </li>
      </ul>
    </SecondTitleWrapper>
  );
};

const SecondTitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
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
      font-weight: 600;
      a {
        font-size: 1.75rem;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default SecondTitle;
