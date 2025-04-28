import { getBlogBySlug, getBlogSlugs } from "@/data/blog/blogutils";
import Link from "next/link";

const Blogs: React.FC = () => {
  return (
    <div className="p-10 flex flex-col gap-4 min-h-screen">
      <div className="bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface p-4 w-fit">
        <h1 className="text-7xl font-bold">blogs</h1>
      </div>
      {getBlogSlugs().map((slug) => {
        const blog = getBlogBySlug(slug);
        return (
          <div key={slug} className="flex flex-row">
            <div className="bg-surface dark:bg-dark-surface p-2 w-min" />
            <div className="flex flex-col p-4">
              <Link href={`/blog/${slug}`}>
                <h1 className="text-2xl font-bold">{blog.title}</h1>
              </Link>
              <p>{blog.description}</p>
              <p>{blog.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
