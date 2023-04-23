import ListTitle from "@/components/global/List";
import { path } from "@/constant/locationLink";
import { Line, ListWrapper, StrongTitle } from "@/styles/mixins";
import styled from "@emotion/styled";
import React from "react";

const SecondProject = () => {
  return (
    <ListWrapper>
      <Line />
      <StrongTitle>프로젝트</StrongTitle>
      <ListTitle
        title="Taeh - 2023.04.21 ~ 23"
        stack="Next, TypeScript, Emotion, Node"
        href={true}
        link={path.taeh}
        desc="2023 Taeh 포트폴리오"
      />
      <ListTitle
        title="Navis - 2023.03 ~ 2023.04"
        stack="React, Recoil, React-Query, Styled-Component"
        href={true}
        link={path.navis}
        desc="마크다운을 통한 소규모 그룹 관리 플랫폼"
      />
      <ListTitle
        title="threebnb - 2023.03.03 ~ 09 (폐쇄)"
        stack="React, Recoil, React-Query, Styled-component"
        href={true}
        link={path.airbnb}
        desc="에어비앤비 클론 프로젝트"
      />
      <ListTitle
        title="VikingBand - 2023.02.24 ~ 2023.03.02 (폐쇄)"
        stack="React, Recoil, React-Query, Styled-Component"
        href={true}
        link={path.vikingBand}
        desc="스터디 그룹 플랫폼"
      />
      <ListTitle
        title="Richae - 2023.01.25 ~ 29"
        stack="React, Recoil, React-Query, Craco, HighCharts"
        desc="해외 etf 상위 100개 정보 확인 토이 프로젝트"
        href={true}
        link={path.richae}
      />
      <ListTitle
        title="국내상장 이자 - 2022.11 ~ 2023.01"
        stack="React, TypeScript, SCSS, Tailwind, HighCharts"
        desc="실시간 국내 etf 데이터 프로젝트"
        href={true}
        link={path.ezar_kr}
      />
      <ListTitle
        title="해외상장 이자 - 2022.10 ~ 2023.01"
        stack="Angular, TypeScript, SCSS, HighCharts"
        desc="실시간 해외 etf 데이터 프로젝트"
        href={true}
        link={path.ezar_samsung}
      />
    </ListWrapper>
  );
};

export default SecondProject;
