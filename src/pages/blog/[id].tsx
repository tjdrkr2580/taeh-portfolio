import HeadInfo from "@/components/global/HeadInfo";
import styled from "@emotion/styled";
import React from "react";
import fs from "fs";
import { markDownDirList } from "@/constant/path";
import {
  flexCenterCenter,
  pageMarginStyle,
  pageWidthStyle,
} from "@/styles/mixins";
import { fileDetailProps, markdownDetailSSGType } from "@/types/props";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import Title from "./Title";

const BlogDetail = ({ data, contentHtml }: fileDetailProps) => {
  return (
    <>
      <HeadInfo title={`Taeh | ${data?.title}`} />
      <DetailWrapper>
        <Title data={data} />
        <DetailMarkdownComponent
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </DetailWrapper>
    </>
  );
};

const DetailWrapper = styled.section`
  display: flex;
  align-items: center;
  min-height: 90vh;
  margin: 0 auto;
  flex-direction: column;
  ${pageMarginStyle}
  ${pageWidthStyle}
`;

const DetailMarkdownComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  ol {
    li {
      list-style: decimal;
    }
  }

  li {
    margin: 1rem 0 1rem 1rem;
    list-style: disc;
    font-size: 1.5rem;
  }

  img {
    width: fit-content;
    object-fit: cover;
  }

  p {
    line-height: 1.5;
    font-size: 1.4rem;
  }

  h1 {
    font-size: 2.7rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2.1rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  h1,
  h2,
  h3,
  h4 {
    padding: 1rem 0;
    border-bottom: 0.2rem solid ${(props) => props.theme.primaryColor};
  }

  blockquote {
    padding: 0 1em;
    color: ${(props) => props.theme.primaryColor};
    border-left: 0.25rem solid ${(props) => props.theme.primaryColor};
  }

  pre {
    width: 100%;
    padding: 2rem;
    border-radius: 0.4rem;
    background: ${(props) => props.theme.codeColor};

    code {
      width: 100%;
      font-size: 1.6rem;
      width: fit-content;
    }
  }
`;

export default BlogDetail;

export async function getStaticProps(param: markdownDetailSSGType) {
  const { id } = param.params;
  const detailPath = path.join(markDownDirList, id + ".md");
  const detailFile = fs.readFileSync(detailPath, "utf-8");
  const { data, content } = matter(detailFile);
  const processedContent = await remark().use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      data,
      contentHtml,
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
