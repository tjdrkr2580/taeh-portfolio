import HeadInfo from "@/components/global/HeadInfo";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import fs from "fs";
import { markDownDirList } from "@/constant/path";
import { ErrorWrapper, pageMarginStyle } from "@/styles/mixins";

const BlogDetail = () => {
  const router = useRouter();
  return (
    <>
      <HeadInfo title="d" />
      <DetailWrapper>
        <ErrorWrapper>블로그는 현재 개발중입니다</ErrorWrapper>
      </DetailWrapper>
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

export async function getStaticProps(id: any) {
  return {
    props: {},
  };
}

export async function getStaticPaths(id: string) {
  const fileNames = fs.readdirSync(markDownDirList);
  const paths = fileNames.map((fileName) => {
    const id = fileName.split(".")[0];
    return { params: { id } };
  });
  console.log(paths);
  return {
    paths,
    fallback: true,
  };
}
