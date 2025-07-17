"use client";
import { useTheme } from "./theme-context";
import { FaCamera } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="
        flex items-center justify-between px-6 py-4 shadow-lg transition-all duration-500
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 dark:text-white
      "
    >
      <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300">
        <FaCamera size={32} className="opacity-80" />
        <span className="font-bold text-xl tracking-wide">ArtVibe</span>
      </div>
      <h1 className="hidden sm:block font-extrabold text-2xl tracking-tight drop-shadow-lg">
        Galerie Unsplash
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
        aria-label="Toggle dark mode"
      >
        {theme === "dark" ? <FiMoon size={24} /> : <FiSun size={24} />}
      </button>
    </header>
  );
};

export default Header;
