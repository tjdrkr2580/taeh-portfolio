import fs from "fs";
import matter from "gray-matter";
import path from "path";

const markDownDirList = path.join(process.cwd(), "src", "markdown");

export default function useGetAllPost() {
  const fullPaths = fs.readdirSync(markDownDirList);
  return fullPaths.map((markdown) => {
    const filePath = path.join(markDownDirList, markdown);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return {
      data,
      content,
      markdown,
    };
  });
}
