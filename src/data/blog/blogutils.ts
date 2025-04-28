import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "public/content/blogs");

export function getBlogSlugs() {
  return fs
    .readdirSync(blogsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getBlogBySlug(slug: string) {
  const filePath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse metadata and content
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    content,
  };
}
