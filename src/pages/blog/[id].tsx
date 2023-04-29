import HeadInfo from "@/components/global/HeadInfo";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import fs from "fs";
import { markDownDirList } from "@/constant/path";
import { ErrorWrapper, pageMarginStyle } from "@/styles/mixins";
import { fileProps, markdownDetailSSGType } from "@/types/props";
import path from "path";
import matter from "gray-matter";

const BlogDetail = ({ content, data }: fileProps) => {
  return (
    <>
      <HeadInfo title="d" />
      <DetailWrapper>{/* <Title /> */}</DetailWrapper>
    </>
  );
};

const DetailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${pageMarginStyle}
  min-height: 100vh;
`;

export default BlogDetail;

export async function getStaticProps(param: markdownDetailSSGType) {
  const { id } = param.params;
  const detailPath = path.join(markDownDirList, id + ".md");
  const detailFile = fs.readFileSync(detailPath, "utf-8");
  const { data, content } = matter(detailFile);

  return {
    props: {
      data,
      content,
    },
  };
}

export async function getStaticPaths(id: string) {
  const fileNames = fs.readdirSync(markDownDirList);
  const paths = fileNames.map((fileName) => {
    const id = fileName.split(".")[0];
    return { params: { id } };
  });
  return {
    paths,
    fallback: true,
  };
}
