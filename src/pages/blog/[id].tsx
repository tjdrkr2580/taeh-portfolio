import HeadInfo from "@/components/global/HeadInfo";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import fs from "fs";
import { markDownDirList } from "@/constant/path";

const BlogDetail = () => {
  const router = useRouter();
  return (
    <>
      <HeadInfo title="d" />
      <DetailWrapper></DetailWrapper>
    </>
  );
};

const DetailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
