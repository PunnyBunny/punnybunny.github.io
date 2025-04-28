import Link from "next/link";

const AppBar: React.FC = () => {
  return (
    <header className="w-full bg-black text-white p-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl">
            <span className="font-bold">sunny</span>
            chenug
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-on-surface">
            about
          </Link>
          <Link href="/blog" className="text-on-surface">
            blog
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default AppBar;
