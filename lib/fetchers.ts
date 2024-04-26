import fs from "fs";
import { join } from "path";
import { getAllHeadings, parseMarkdown } from "./markdown";

const postsDirectory = join(process.cwd(), "_posts");
const fileExtension = ".mdx";
const defaultDate = new Date(0);

export function getAllPosts() {
  return Promise.all(getPostSlugs().map(getPost));
}

export async function getPost(slug: string) {
  const filePath = join(postsDirectory, `${slug}${fileExtension}`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, frontmatter } = await parseMarkdown(fileContent);
  const headings = await getAllHeadings(fileContent);

  return {
    title: frontmatter.title || "",
    tags: convertTags(frontmatter.tags || ""),
    excerpt: frontmatter.excerpt || "",
    date: frontmatter.date ? new Date(frontmatter.date) : defaultDate,
    slug: slug,
    content,
    headings,
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
