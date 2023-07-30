import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const fileExtension = ".mdx";

export function getAllPosts() {
  return getPostSlugs().map(getPost);
}

export function getPost(slug: string) {
  const filePath = join(postsDirectory, `${slug}${fileExtension}`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    ...data,
    title: data.title || "",
    tags: convertTags(data.tags || ""),
    excerpt: data.excerpt || "",
    slug: slug,
    content,
  };
}

function getPostSlugs() {
  return fs.readdirSync(postsDirectory).map(toSlug);
}

function toSlug(fileName: string) {
  return fileName.replace(fileExtension, "");
}

function convertTags(tags: string) {
  if (tags.length === 0) {
    return [];
  }
  return tags.split(",").map((s) => s.trim());
}
