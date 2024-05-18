import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { LinkedIn, GithubIcon, TwitterIcon, SunIcon } from "../Icons";
const Header = () => {
  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max py-3 px-8  gap-2 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div>
        <a href="" className="w-6 h6 mr-4 inline-block">
          <LinkedIn className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="" className="w-6 h6 mr-4 inline-block">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="" className="w-6 h6 mr-4 inline-block ">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
