"use client";
import React from "react";

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/16/solid";

const AppBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const links = (
    <>
      <button
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          closeMenu();
        }}
        className="bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface hover:bg-gray-800 transition duration-300"
      >
        toggle theme
      </button>
      <Link
        href="/"
        onClick={closeMenu}
        className="text-on-surface dark:text-on-dark-surface"
      >
        about
      </Link>
      <Link
        href="/blog"
        onClick={closeMenu}
        className="text-on-surface dark:text-on-dark-surface"
      >
        blog
      </Link>
    </>
  );

  return (
    <header className="w-full bg-surface dark:bg-dark-surface text-on-surface dark:text-on-dark-surface">
      <nav>
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row items-center justify-between w-full h-16 p-4">
            <Link href="/">
              <div className="flex items-center gap-4">
                <h1 className="text-xl">
                  <span className="font-bold">sunny</span>
                  chenug
                </h1>
              </div>
            </Link>
            <div className="md:hidden flex items-center justify-center">
              <button onClick={toggleMenu}>
                <Bars3Icon className="h-6 w-6 text-on-surface dark:text-on-dark-surface" />
              </button>
            </div>
            <div className="hidden md:flex items-center gap-4">{links}</div>
          </div>
          {isMenuOpen && (
            <div className="fixed top-16 left-0 bottom-0 w-full bg-surface dark:bg-dark-surface p-4 z-10 flex flex-col gap-4 items-center justify-center">
              {links}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
export default AppBar;
