"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme !== null) {
      const darkMode = JSON.parse(savedTheme);
      setIsDark(darkMode);
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("isDarkMode", JSON.stringify(newTheme));
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl font-bold flex items-center gap-x-4 text-right mr-20 pb-2 cursor-pointer">
      {isDark ? (
        <>
          <Sun className="w-6 h-6 text-white" />{" "}
          <p className="text-white">Light Mode</p>
        </>
      ) : (
        <>
          <Moon className="w-6 h-6 text-black" />{" "}
          <p className="text-black">Dark Mode</p>
        </>
      )}
    </button>
  );
};
export default ThemeToggle;
