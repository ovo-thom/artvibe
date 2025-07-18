"use client";
import { useTheme } from "./theme-context";
import { useState } from "react";
import GalleryGrid from "./GalleryGrid";

const themes = ["Nature", "Animal", "Travel", "Art", "People"];

export default function ThemeFilters() {
  const { theme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState("Nature");
  const [inputsearch, setInputSearch] = useState("");

  return (
    <section
      className={`flex flex-col items-center gap-6 py-8 px-5 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="flex flex-wrap gap-3 justify-center">
        {themes.map((theme) => (
          <button
            value={theme}
            onClick={() => setSelectedTheme(theme)}
            key={theme}
            className="px-5 py-2 rounded-full font-semibold shadow-md bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 text-white hover:scale-105 hover:from-cyan-500 hover:to-violet-500 transition-all duration-300 border-2 border-transparent dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800 dark:text-white"
          >
            {theme}
          </button>
        ))}
      </div>
      <input
        type="search"
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder="Rechercher une photo..."
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <GalleryGrid selectedTheme={selectedTheme} inputSearch={inputsearch} />
    </section>
  );
}
