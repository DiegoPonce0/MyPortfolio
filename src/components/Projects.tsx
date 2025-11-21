import { Card } from "../components/ui/card";
import { Button } from "./ui/button";


export default function Projects() {
const projects = [
{
title: "React UI Component Showcase",
desc: "Custom components built with shadcn/ui, TypeScript and Tailwind.",
link: "#",
},
{
title: "Dashboard UI",
desc: "A clean responsive dashboard with charts, tables and dark mode.",
link: "#",
},
];


return (
<section className="px-6 py-16">
<h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Projects</h2>


<div className="grid md:grid-cols-2 gap-6">
{projects.map((p) => (
<Card key={p.title}>
<div className="p-6">
<h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
<p className="text-neutral-700 dark:text-neutral-300 mt-2">{p.desc}</p>
<Button className="mt-4" variant="default">
<a href={p.link}>View Demo</a>
</Button>
</div>
</Card>
))}
</div>
</section>
);
}