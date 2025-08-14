import ThemeToggle from "@/components/ThemeToggle";
import { Globe } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white text-black  dark:bg-zinc-700 dark:text-white  top-0 w-full fixed left-0 z-50  shadow-xl/20 shadow-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-20 py-2">
        <div className="flex">
          <h1 className="font-black tracking-tighter text-5xl t bg-gradient-to-tr dark:text-primary-dark">
            Atlas
          </h1>
          <Globe className=" dark:text-primary-dark" />
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
