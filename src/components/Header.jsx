"use client";

import { Globe, Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(0);
  return (
    <header className="flex justify-between items-center bg-zinc-800 top-0 w-full fixed left-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-20 py-2">
        <div className="flex">
          <h1 className="font-black tracking-tighter text-5xl t bg-gradient-to-tr">
            Atlas
          </h1>
          <Globe className="text-white " />
        </div>
        {/* {THEME TOGGLE} */}
      </div>
      <div
        onClick={() => {
          setTheme((prev) => !prev);
        }}
        className="text-xl font-bold flex items-center gap-x-4 text-right mr-20 pb-2 cursor-pointer">
        {theme ? (
          <>
            <Moon className="w-6 h-6" /> Dark Mode
          </>
        ) : (
          <>
            <Sun className="w-6 h-6" /> Light Mode
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
