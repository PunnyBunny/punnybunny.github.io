import { getBlogBySlug, getBlogSlugs } from "@/data/blog/blogutils";
import { micromark } from "micromark";

interface BlogProps {
  params: Promise<{ slug: string }>;
}

const Blog: React.FC<BlogProps> = async ({ params }) => {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  const blogHtml = micromark(blog.content);
  return (
    <div className="p-10 flex flex-col gap-4 min-h-screen">
      <div className="bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface p-4 w-fit flex flex-col">
        <h1 className="text-7xl font-bold">{blog.title}</h1>
        <p>{blog.date}</p>
      </div>
      <div className="relative my-4">
        <div className="absolute text-8xl -top-2 -left-3 opacity-20">“</div>
        <blockquote>
          <h2 className="text-4xl italic">{blog.description}</h2>
        </blockquote>
      </div>
      <div className="max-w-none">
        <div dangerouslySetInnerHTML={{ __html: blogHtml }} />
      </div>
    </div>
  );
};
export default Blog;

// This function generates static paths for the dynamic route
// It is used to pre-render pages at build time
export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false; // Disable dynamic params for this route
