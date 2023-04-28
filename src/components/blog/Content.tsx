import { blogProp } from "@/types/props";
import styled from "@emotion/styled";
import React from "react";

const Content = ({ file }: blogProp) => {
  return (
    <BlogContent>
      <h1>{file.data.title}</h1>
      <h1>{file.data.title}</h1>
    </BlogContent>
  );
};

const BlogContent = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 45%;
  height: 4rem;
  padding: 1rem 0.6rem;
`;
export default Content;
