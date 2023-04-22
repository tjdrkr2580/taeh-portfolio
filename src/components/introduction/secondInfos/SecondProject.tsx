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
        title="Navis - 2023.03 ~ 2023.04"
        stack="React, Recoil, React-Query, Styled-Component"
        href={true}
        link={path.navis}
      />
      <ListTitle
        title="VikingBand - 2023.02.24 ~ 2023.03.02 (폐쇄)"
        stack="React, Recoil, React-Query, Styled-Component"
        href={true}
        link={path.navis}
      />
      <ListTitle
        title="에어비앤비 클론 프로젝트 - 2023.03.03 ~ 2023.03.09 (폐쇄)"
        stack="React, Recoil, React-Query, Styled-component"
        href={true}
        link={path.ezar_samsung}
      />
      <ListTitle
        title="Richae - 2023.01.25 ~ 2023.01.29"
        stack="React, Recoil, React-Query, Craco"
        href={true}
        link={path.navis}
      />
      <ListTitle
        title="국내상장 이자 - 2022.11 ~ 2023.01"
        stack="React, TypeScript, SCSS, Tailwind"
        href={true}
        link={path.ezar_kr}
      />
      <ListTitle
        title="해외상장 이자 - 2022.10 ~ 2023.01"
        stack="Angular, TypeScript, SCSS"
        href={true}
        link={path.ezar_samsung}
      />
    </ListWrapper>
  );
};

export default SecondProject;
