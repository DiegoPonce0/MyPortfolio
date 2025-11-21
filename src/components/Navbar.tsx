import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <h1 className="text-xl font-bold text-neutral-900 dark:text-white">Diego Portfolio</h1>

      <div className="flex items-center gap-4">
        {/* Links de navegación */}
        <a href="#projects" className="text-sm text-neutral-700 dark:text-neutral-300 hover:underline">Projects</a>
        <a href="#skills" className="text-sm text-neutral-700 dark:text-neutral-300 hover:underline">Skills</a>
        <a href="#contact" className="text-sm text-neutral-700 dark:text-neutral-300 hover:underline">Contact</a>

        <Button variant="default" onClick={toggleTheme} className="ml-4">
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
      </div>
    </nav>
  );
}