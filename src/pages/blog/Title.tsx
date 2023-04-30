import Tag from "@/components/blog/Tag";
import { TagWrapper } from "@/styles/mixins";
import { fileData } from "@/types/props";
import styled from "@emotion/styled";
import React from "react";

const Title = ({ data }: fileData) => {
  return (
    <TitleWrapper>
      <h1>{data?.title}</h1>
      <span>{data?.date}</span>
      <TagWrapper>
        {data?.tag?.map((tag, index) => (
          <Tag tag={tag} key={index} />
        ))}
      </TagWrapper>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3.2rem;
  }

  span {
    font-size: 1.8rem;
  }
  padding: 1rem 0;
  margin: 1.5rem 0;
  border-bottom: 0.2rem solid ${(props) => props.theme.primaryColor};
`;

export default Title;
