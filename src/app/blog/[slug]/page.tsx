import { getBlogBySlug, getBlogSlugs } from "@/data/blog/blogutils";

interface BlogProps {
  params: Promise<{ slug: string }>;
}

const Blog: React.FC<BlogProps> = async ({ params }) => {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  return (
    <div className="p-10 flex flex-col gap-4 min-h-screen">
      <div className="bg-black text-white p-4 w-fit">
        <h1 className="text-7xl font-bold">{blog.title}</h1>
        <p>{blog.date}</p>
      </div>
      <div className="prose max-w-none">{blog.content}</div>
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
