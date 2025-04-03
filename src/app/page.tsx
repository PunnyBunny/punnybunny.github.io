"use client";
import React, { useRef } from 'react';

import Image from 'next/image';
import fryegg from '../../public/images/fryegg.jpg';
import { ChevronDoubleDownIcon, FolderIcon, HomeIcon, PhotoIcon, UserIcon } from '@heroicons/react/16/solid';

interface Refs {
  homeRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  educationRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
};
type HomeProps = Refs;
type SideBarProps = Refs;

const SideBar: React.FC<SideBarProps> = ({ homeRef, aboutRef, educationRef, projectsRef }) => {
  return (
    <aside className="fixed top-0 left-0 h-full w-32 bg-surface text-on-surface items-start p-4">
      <nav className="flex flex-col items-center justify-start h-full gap-5">
        <button className="flex flex-col items-center rounded bg-black text-on-surface p-2" onClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth' })}>
          <p>Home</p>
          <HomeIcon className="size-4" />
        </button>
        <button className="flex flex-col items-center rounded bg-black text-on-surface p-2" onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}>
          <p>About</p>
          <UserIcon className="size-4" />
        </button>
        <button className="flex flex-col items-center rounded bg-black text-on-surface p-2" onClick={() => educationRef.current?.scrollIntoView({ behavior: 'smooth' })}>
          <p>Education</p>
          <PhotoIcon className="size-4" />
        </button>
        <button className="flex flex-col items-center rounded bg-black text-on-surface p-2" onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}>
          <p>Projects</p>
          <FolderIcon className="size-4" />
        </button>
      </nav>
    </aside>
  );
};

const Home: React.FC<HomeProps> = ({ homeRef, aboutRef, educationRef, projectsRef }) => {
  return (
    <div className="ml-32 snap-y snap-proximity overflow-y-scroll h-screen">
      <div ref={homeRef} className="h-screen w-full bg-black text-on-surface relative flex flex-col items-center justify-center snap-start">
        <h1 className="text-4xl mb-4 z-10">Sunny Chenug</h1>
        <Image src={fryegg} alt="Egg" fill sizes='100vw' className='absolute top-0 left-0 opacity-50 object-cover' />
        <ChevronDoubleDownIcon className="h-10 w-10 animate-bounce" />
      </div>

      <div className="flex flex-col gap-5 justify-center bg-blue-500 text-on-surface p-5">
        <div ref={aboutRef} className="bg-surface text-on-surface rounded-lg p-4 w-3/4 self-start snap-start scroll-m-4">
          <div className="card-header">
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
          <div className="card-body">
            <p className="text-lg">I am a software engineer with a passion for building intuitive and efficient web applications. My focus is on creating user-friendly experiences with modern technologies.</p>
          </div>
        </div>

        <div ref={educationRef} className="bg-surface text-on-surface rounded-lg p-4 w-3/4 self-end snap-start scroll-m-4">
          <div className="card-header">
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="card-body">
            <p className="text-lg">BSc in Computer Science from University of Technology (2018-2022). Specialized in web development and software engineering with a focus on modern frameworks.</p>
          </div>
        </div>

        <div ref={projectsRef} className="bg-surface text-on-surface rounded-lg p-4 w-3/4 self-start snap-start scroll-m-4">
          <div className="card-header">
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          <div className="card-body">
            <p className="text-lg">Developed several full-stack applications including an e-commerce platform, a task management system, and a real-time chat application using React, Next.js, and Node.js.</p>
          </div>
        </div>
      </div>

      <div className='h-screen bg-black'>
        <h1>hi</h1>
      </div>
    </div>
  );
}

const Page: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex">
      <SideBar homeRef={homeRef} aboutRef={aboutRef} educationRef={educationRef} projectsRef={projectsRef} />
      <Home homeRef={homeRef} aboutRef={aboutRef} educationRef={educationRef} projectsRef={projectsRef} />
    </div>
  );
};

export default Page;
