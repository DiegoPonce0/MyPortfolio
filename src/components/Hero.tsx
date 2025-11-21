import { Button } from "./ui/button";


export default function Hero() {
return (
<section className="px-6 py-20 text-center">
<h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
Front-End Developer
</h2>
<p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto">
Front-End Developer specializing in React, WordPress, and high-converting websites</p>


<div className="mt-6 flex justify-center gap-4">
        {/* Scroll to Projects */}
        <a href="#projects">
          <Button variant="default">View Projects</Button>
        </a>

        {/* Download CV */}
        <a href="/cv.pdf" download>
          <Button variant="default">Download CV</Button>
        </a>
</div>
</section>
);
}