"use client";
import { useTheme } from "./theme-context";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div
      className={`h-16 border-t flex flex-col sm:flex-row justify-center items-center  text-sm sm:text-base md:text-lg font-medium gap-2 sm:gap-4 sm:px-4
      ${
        theme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      <span>
        © {new Date().getFullYear()} ArtVibe – Créé avec Next.js & React
      </span>
      <div className="flex items-center space-x-4">
        <div className="flex items-center group cursor-pointer">
          <FaGithubSquare className="text-xl md:text-2xl group-hover:text-cyan-500 transition-colors" />
          <a
            href="https://github.com/ovo-thom/artvibe"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 group-hover:text-cyan-500 transition-colors"
          >
            Github
          </a>
        </div>
        <div className="flex items-center group cursor-pointer">
          <FaLinkedin className="text-xl md:text-2xl group-hover:text-cyan-500 transition-colors" />
          <a
            href="https://www.linkedin.com/in/thomas-thonnard-a520b72b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 group-hover:text-cyan-500 transition-colors"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
