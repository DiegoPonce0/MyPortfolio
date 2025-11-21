import { Button } from "./ui/button";


export default function Hero() {
return (
<section className="px-6 py-20 text-center">
<h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
Senior Front-End Developer
</h2>
<p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto">
I build fast, modern, accessible interfaces using React, TypeScript, and scalable UI systems.
</p>


<div className="mt-6 flex justify-center gap-4">
<Button variant="default">View Projects</Button>
<Button variant="default">GitHub</Button>
</div>
</section>
);
}