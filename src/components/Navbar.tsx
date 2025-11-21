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
<nav className="w-full flex justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
<h1 className="text-xl font-bold text-neutral-900 dark:text-white">Diego Portfolio</h1>


<Button variant="default" onClick={toggleTheme}>
{dark ? <Sun size={16} /> : <Moon size={16} />}
</Button>
</nav>
);
}