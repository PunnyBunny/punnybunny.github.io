"use client";
import React from "react";

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/16/solid";

const navigationItems = [
  {
    label: "about",
    href: "/",
  },
  {
    label: "blog",
    href: "/blog",
  },
];

const AppBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface p-4">
      <nav className="flex items-center justify-between">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row items-center justify-between w-full">
            <Link href="/">
              <div className="flex items-center gap-4">
                <h1 className="text-xl">
                  <span className="font-bold">sunny</span>
                  chenug
                </h1>
              </div>
            </Link>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Bars3Icon className="h-6 w-6 text-on-surface dark:text-on-dark-surface" />
              </button>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() =>
                  document.documentElement.classList.toggle("dark")
                }
                className="bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface p-2 rounded-md hover:bg-gray-800 transition duration-300"
              >
                toggle theme
              </button>
              <Link
                href="/"
                className="text-on-surface dark:text-on-dark-surface"
              >
                about
              </Link>
              <Link
                href="/blog"
                className="text-on-surface dark:text-on-dark-surface"
              >
                blog
              </Link>
            </div>
          </div>
          {isMenuOpen && (
            <div className="top-0 left-0 w-full h-screen bg-surface dark:bg-dark-surface p-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-on-surface dark:text-on-dark-surface py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
export default AppBar;
