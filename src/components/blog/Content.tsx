import { blogProp } from "@/types/props";
import styled from "@emotion/styled";
import Link from "next/link";
import Tag from "./Tag";

const Content = ({ file }: blogProp) => {
  console.log(file);
  return (
    <Link href="/">
      <BlogContent>
        <h1>{file.data.title}</h1>
        <span>{file.data.date} 작성</span>
        <TagWrapper>
          {file.data.tag.map((tag, index) => (
            <Tag tag={tag} key={index} />
          ))}
        </TagWrapper>
        <Contents>{file.content}</Contents>
      </BlogContent>
    </Link>
  );
};

const BlogContent = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 100%;
  border: 0.15px solid #a6a6a6;
  border-radius: 0.8rem;
  padding: 2rem 1rem;
  transition: 0.25s filter, 0.25s transform;
  h1 {
    font-size: 2.1rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    font-size: 1.5rem;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

const TagWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Contents = styled.p`
  font-size: 1.5rem;
  width: 75%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export default Content;
