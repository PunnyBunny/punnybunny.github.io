"use client";
import React from "react";

import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useTheme } from "next-themes";

const AppBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { setTheme, theme } = useTheme();

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

  const navigationItems = (
    <>
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
      <button
        onClick={() => {
          if (theme === "dark") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
          closeMenu();
        }}
        className="bg-background text-on-background dark:bg-dark-background dark:text-on-dark-background rounded-3xl flex flex-row items-center justify-center gap-1 p-1"
      >
        {theme === "dark" ? (
          <>
            <MoonIcon className="w-6 h-6 bg-dark-surface text-on-dark-surface rounded-3xl p-1" />
            <ArrowRightIcon className="w-5 h-5" />
            <SunIcon className="w-6 h-6" />
          </>
        ) : (
          <>
            <MoonIcon className="w-6 h-6" />
            <ArrowLeftIcon className="w-5 h-5" />
            <SunIcon className="w-6 h-6 bg-surface text-on-surface rounded-3xl p-1" />
          </>
        )}
      </button>
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
                  cheung
                </h1>
              </div>
            </Link>
            <div className="md:hidden flex items-center justify-center">
              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6 text-on-surface dark:text-on-dark-surface" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-on-surface dark:text-on-dark-surface" />
                )}
              </button>
            </div>
            <div className="hidden md:flex items-center gap-4">
              {navigationItems}
            </div>
          </div>

          <div
            className={`fixed top-16 left-0 bottom-0 w-full bg-surface dark:bg-dark-surface flex flex-col gap-4 items-center justify-center md:hidden transition-all duration-500 ease-in-out ${!isMenuOpen ? "opacity-0 rotate-180 -z-50" : " opacity-100 rotate-0 z-50"}`}
          >
            {navigationItems}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default AppBar;
