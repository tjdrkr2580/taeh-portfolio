import { markDownDirList } from "@/constant/path";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function getAllPost() {
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
