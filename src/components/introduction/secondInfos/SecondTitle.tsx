import styled from "@emotion/styled";
import React from "react";
import Logo from "../../../assets/img/logo.jpeg";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";

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
          <></>
          tjdrkr2580@naver.com
        </li>
        <li>
          <></>
          010-9688-6780
        </li>
        <li>
          <SiKakaotalk size={22} color="#ffdc00" />
          tjdrkr2580
        </li>
        <li>
          <FaGithubSquare size={22} color="#433933" />
          <a href="https://github.com/tjdrkr2580">Taeh</a>
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
      gap: 0.4rem;
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
