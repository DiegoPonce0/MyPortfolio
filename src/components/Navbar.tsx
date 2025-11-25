import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    // add/remove dark class on documentElement
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-theme ${scrolled ? 'shadow-sm' : ''} border-b border-gray-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-sm`}>
      <div className="w-full flex items-center justify-between px-6 py-3">
        <h1 className="text-lg md:text-xl font-bold text-[#111827] dark:text-[#E2E8F0]">Diego Portfolio</h1>

        <div className="flex items-center gap-4">
          <a href="#projects" className="text-sm text-[#374151] dark:text-[#CBD5E1] hover:underline">Projects</a>
          <a href="#skills" className="text-sm text-[#374151] dark:text-[#CBD5E1] hover:underline">Skills</a>
          <a href="#contact" className="text-sm text-[#374151] dark:text-[#CBD5E1] hover:underline">Contact</a>

          <Button variant="default" onClick={toggleTheme} className="ml-4">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
        </div>
      </div>
    </nav>
  );
}