"use client";
import React from "react";

import Link from "next/link";

const AppBar: React.FC = () => {
  return (
    <header className="w-full bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface p-4">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-4">
            <h1 className="text-xl">
              <span className="font-bold">sunny</span>
              chenug
            </h1>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => document.documentElement.classList.toggle("dark")}
            className="bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface p-2 rounded-md hover:bg-gray-800 transition duration-300"
          >
            toggle theme
          </button>
          <Link href="/" className="text-on-surface dark:text-on-dark-surface">
            about
          </Link>
          <Link
            href="/blog"
            className="text-on-surface dark:text-on-dark-surface"
          >
            blog
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default AppBar;
