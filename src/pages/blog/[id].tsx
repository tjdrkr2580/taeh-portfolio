import HeadInfo from "@/components/global/HeadInfo";
import styled from "@emotion/styled";
import fs from "fs";
import { markDownDirList } from "@/constant/path";
import { pageMarginStyle, pageWidthStyle } from "@/styles/mixins";
import { fileDetailProps, markdownDetailSSGType } from "@/types/props";
import path from "path";
import matter from "gray-matter";
import Title from "./Title";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";
import { markdownStyle } from "@/styles/markdown";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogDetail = ({ data, content }: fileDetailProps) => {
  return (
    <>
      <HeadInfo title={`Taeh | ${data?.title}`} />
      <DetailWrapper>
        <Title data={data} />
        <ReactMarkdownWrapper
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <Syntax
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </DetailWrapper>
    </>
  );
};

const DetailWrapper = styled.section`
  display: flex;
  min-height: 90vh;
  margin: 0 auto;
  flex-direction: column;
  ${pageMarginStyle}
  ${pageWidthStyle}
`;

const ReactMarkdownWrapper = styled(ReactMarkdown)`
  display: flex;
  flex-direction: column;
  ${markdownStyle};
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

const Syntax = styled(SyntaxHighlighter)`
  background-color: ${(props) => props.theme.codeColor} !important;
  font-weight: 500;
  color: ${(props) => props.theme.textColor} !important;
  code {
    font-size: 1.6rem;
  }
  span {
    letter-spacing: 0.05rem;
    line-height: 1.3;
    font-size: 1.6rem !important;
    font-weight: 500;
  }
`;

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
