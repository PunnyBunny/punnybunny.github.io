import {
  FolderIcon,
  HomeIcon,
  PhotoIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const SideBar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-32 bg-surface text-on-surface items-start p-4">
      <nav className="flex flex-col items-center justify-start h-full gap-5">
        <a
          href="#"
          className="flex flex-col items-center rounded bg-black text-on-surface p-2"
        >
          <p>Home</p>
          <HomeIcon className="size-4" />
        </a>
        <a
          href="#about-me"
          className="flex flex-col items-center rounded bg-black text-on-surface p-2"
        >
          <p>About</p>
          <UserIcon className="size-4" />
        </a>
        <a
          href="#education"
          className="flex flex-col items-center rounded bg-black text-on-surface p-2"
        >
          <p>Education</p>
          <PhotoIcon className="size-4" />
        </a>
        <a
          href="#projects"
          className="flex flex-col items-center rounded bg-black text-on-surface p-2"
        >
          <p>Projects</p>
          <FolderIcon className="size-4" />
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;
